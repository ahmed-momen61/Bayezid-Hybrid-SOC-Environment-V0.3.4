const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const generateEmbedding = async(text) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-embedding-2" });
        const result = await model.embedContent(text);

        if (result && result.embedding && result.embedding.values) {
            return result.embedding.values;
        }
        return null;
    } catch (error) {
        console.error("[-] Embedding Error, trying fallback:", error.message);
        try {
            const fallbackModel = genAI.getGenerativeModel({ model: "embedding-001" });
            const result = await fallbackModel.embedContent(text);
            return result.embedding.values;
        } catch (fallbackError) {
            console.error("[-] Fallback also failed:", fallbackError.message);
            return null;
        }
    }
};

const findSimilarIncidents = async(logData) => {
    console.log(`[🧠] Searching Institutional Memory for similar attack patterns...`);
    const vector = await generateEmbedding(logData);

    if (!vector || !Array.isArray(vector)) return null;

    const vectorString = `[${vector.join(',')}]`;

    try {
        const similarAlerts = await prisma.$queryRawUnsafe(`
            SELECT id, "threatType", "status", 
            1 - (embedding <=> '${vectorString}'::vector) as similarity
            FROM "Alert"
            WHERE embedding IS NOT NULL
            ORDER BY embedding <=> '${vectorString}'::vector
            LIMIT 1;
        `);

        if (similarAlerts && similarAlerts.length > 0) {
            if (similarAlerts[0].similarity > 0.80) {
                return similarAlerts[0];
            }
        }
        return null;
    } catch (error) {
        console.error("[-] Vector Search Error:", error.message);
        return null;
    }
};

const saveIncidentToMemory = async(alertId, logData) => {
    const vector = await generateEmbedding(logData);
    if (!vector) return;

    const vectorString = `[${vector.join(',')}]`;

    try {
        await prisma.$executeRawUnsafe(`
            UPDATE "Alert" 
            SET embedding = '${vectorString}'::vector 
            WHERE id = '${alertId}';
        `);
        console.log(`[💾] Alert ${alertId} etched into Bayezid's neural memory.`);
    } catch (error) {
        console.error("[-] Memory Save Error:", error.message);
    }
};

module.exports = { findSimilarIncidents, saveIncidentToMemory };