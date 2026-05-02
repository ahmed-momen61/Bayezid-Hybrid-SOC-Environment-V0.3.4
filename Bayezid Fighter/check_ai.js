const axios = require('axios');
require('dotenv').config();

async function checkGoogleModels() {
    const apiKey = process.env.GOOGLE_API_KEY;

    if (!apiKey || apiKey === "FUCK U, I won't give u my API") {
        console.log("\n[❌] ERROR: API Key is missing or invalid in .env file.");
        return;
    }

    console.log(`\n[🔍] Connecting to Google AI servers using your API Key...`);

    try {
        const response = await axios.get(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
        const models = response.data.models;

        console.log(`\n[✅] SUCCESS! Your API Key is active and authorized.`);

        console.log(`\n--- 🟢 CHAT MODELS (Used in aiService.js) ---`);
        models.forEach(model => {
            if (model.supportedGenerationMethods.includes("generateContent")) {
                console.log(`🟢 ${model.name.replace('models/', '')}`);
            }
        });

        console.log(`\n--- 🔵 EMBEDDING MODELS (Used in memoryService.js) ---`);
        let foundEmbedding = false;
        models.forEach(model => {
            if (model.supportedGenerationMethods.includes("embedContent")) {
                console.log(`🔵 ${model.name.replace('models/', '')}`);
                foundEmbedding = true;
            }
        });

        if (!foundEmbedding) {
            console.log(`\n[⚠️] WARNING: No Embedding models found for this API Key.`);
        }

        console.log(`\n[*] Final Step: Copy a BLUE name to memoryService.js and a GREEN name to aiService.js!`);

    } catch (error) {
        if (error.response) {
            console.log(`\n[❌] Google API Error (${error.response.status}): ${error.response.data.error.message}`);
        } else {
            console.error('\n[❌] Connection Error:', error.message);
        }
    }
}

checkGoogleModels();