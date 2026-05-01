import { Swords, Shield, Bug, Radio, Crosshair, Lock, Zap, Eye } from 'lucide-react'

const StatCard = ({ icon: Icon, label, value, color, glow }) => (
  <div className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${color} backdrop-blur-sm`}>
    <div className={`flex items-center justify-center w-8 h-8 rounded-md ${glow}`}>
      <Icon className="w-4 h-4" />
    </div>
    <div className="flex flex-col">
      <span className="text-[9px] tracking-[0.15em] uppercase opacity-70">{label}</span>
      <span className="text-lg font-bold font-mono tracking-wider">{value}</span>
    </div>
  </div>
)

const AgentNode = ({ name, role, status, team }) => {
  const teamColors = {
    blue: {
      border: 'border-cyan-500/40',
      bg: 'bg-cyan-500/5',
      glow: 'shadow-[0_0_10px_rgba(0,212,255,0.15)]',
      icon: 'text-cyan-400',
      status: 'bg-cyan-400',
    },
    red: {
      border: 'border-rose-500/40',
      bg: 'bg-rose-500/5',
      glow: 'shadow-[0_0_10px_rgba(255,0,64,0.15)]',
      icon: 'text-rose-400',
      status: 'bg-rose-500',
    },
  }

  const colors = teamColors[team]

  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${colors.border} ${colors.bg} ${colors.glow}`}>
      <div className="relative">
        <Shield className={`w-5 h-5 ${colors.icon}`} />
        <div className={`absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full ${colors.status} ${status === 'active' ? 'animate-pulse' : ''}`} />
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <span className="text-xs font-bold tracking-wider truncate">{name}</span>
        <span className="text-[9px] tracking-wide opacity-50 truncate">{role}</span>
      </div>
      <span className={`text-[9px] px-2 py-0.5 rounded border ${team === 'red' ? 'border-rose-500/30 text-rose-400 bg-rose-500/10' : 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10'}`}>
        {status.toUpperCase()}
      </span>
    </div>
  )
}

const WarRoom = () => {
  const stats = [
    { icon: Crosshair, label: 'Active Threats', value: '12', color: 'border-rose-500/30 text-rose-400 bg-rose-500/5', glow: 'bg-rose-500/10 text-rose-400' },
    { icon: Shield, label: 'Defended', value: '847', color: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/5', glow: 'bg-cyan-500/10 text-cyan-400' },
    { icon: Eye, label: 'Monitoring', value: '3.2K', color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5', glow: 'bg-emerald-500/10 text-emerald-400' },
    { icon: Zap, label: 'Auto-Resolved', value: '94%', color: 'border-amber-500/30 text-amber-400 bg-amber-500/5', glow: 'bg-amber-500/10 text-amber-400' },
  ]

  const agents = [
    { name: 'Bayezid-Core', role: 'Orchestrator AI', status: 'active', team: 'blue' },
    { name: 'Scout', role: 'Reconnaissance', status: 'idle', team: 'red' },
    { name: 'Breacher', role: 'Penetration', status: 'standby', team: 'red' },
    { name: 'Phantom', role: 'Privilege Escalation', status: 'idle', team: 'red' },
    { name: 'Chameleon', role: 'WAF Bypass', status: 'standby', team: 'red' },
    { name: 'Overlord', role: 'Campaign Director', status: 'active', team: 'red' },
  ]

  return (
    <main className="flex-1 h-full flex flex-col min-w-0 bg-slate-950/50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 h-16 border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm flex-shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg border border-cyan-500/30 bg-cyan-500/10 shadow-[0_0_12px_rgba(0,212,255,0.2)]">
            <Swords className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-[0.15em] text-slate-100 cyber-glow-blue uppercase">
              Bayezid War Room
            </h1>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] tracking-wider text-emerald-400 font-mono">
                LIVE INTERROGATION
              </span>
              <span className="text-slate-600 mx-1">|</span>
              <span className="text-[10px] tracking-wider text-slate-500 font-mono">
                SOCKET.IO CONNECTED
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-700 bg-slate-800/50">
            <Lock className="w-3 h-3 text-cyan-400" />
            <span className="text-[10px] tracking-wider text-slate-300 font-mono">ENCRYPTED</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/10">
            <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
            <span className="text-[10px] tracking-wider text-emerald-400 font-mono">ONLINE</span>
          </div>
        </div>
      </header>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-3 px-6 py-4 flex-shrink-0">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 px-6 pb-4 min-h-0 overflow-y-auto">
        <div className="h-full flex gap-4">
          {/* Left: Main War Room Display */}
          <div className="flex-1 flex flex-col gap-4 min-w-0">
            {/* Primary Display */}
            <div className="flex-1 relative rounded-xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-sm overflow-hidden">
              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400/60 rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400/60 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cyan-400/60 rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400/60 rounded-br-lg" />

              {/* Scan Line Effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                  className="absolute left-0 right-0 h-px bg-cyan-400/20"
                  style={{
                    animation: 'scanline 4s linear infinite',
                    boxShadow: '0 0 10px rgba(0, 212, 255, 0.3)',
                  }}
                />
              </div>

              {/* Center Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-cyan-400/30 bg-cyan-400/5 mb-4 animate-pulse-glow">
                  <Crosshair className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-xl font-bold tracking-[0.2em] text-slate-200 cyber-glow-blue">
                  WAR ROOM ACTIVE
                </h2>
                <p className="text-xs text-slate-500 mt-2 tracking-wider font-mono">
                  AWAITING THREAT DATA STREAM...
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-[10px] text-cyan-400 tracking-widest font-mono">
                    SOC ENGINE STANDBY
                  </span>
                </div>
              </div>

              {/* HUD Overlay Elements */}
              <div className="absolute top-4 left-4 text-[9px] font-mono text-slate-600 tracking-wider">
                <div>COORDS: 34.0522°N, 118.2437°W</div>
                <div className="mt-1">SYSTEM: BAYEZID-CORE-v3.0</div>
              </div>
              <div className="absolute top-4 right-4 text-[9px] font-mono text-slate-600 tracking-wider text-right">
                <div>LATENCY: 12ms</div>
                <div className="mt-1">UPTIME: 99.97%</div>
              </div>
              <div className="absolute bottom-4 left-4 text-[9px] font-mono text-slate-600 tracking-wider">
                <div>THREADS: 24 ACTIVE</div>
              </div>
              <div className="absolute bottom-4 right-4 text-[9px] font-mono text-slate-600 tracking-wider text-right">
                <div>MEMORY: 4.2GB / 16GB</div>
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="flex items-center gap-4 px-4 py-3 rounded-lg border border-slate-800 bg-slate-900/40 flex-shrink-0">
              <div className="flex items-center gap-2">
                <Bug className="w-3.5 h-3.5 text-rose-400" />
                <span className="text-[10px] tracking-wider text-slate-400">
                  REDSWARM:
                </span>
                <span className="text-[10px] tracking-wider text-rose-400 font-bold">
                  STANDBY
                </span>
              </div>
              <div className="w-px h-4 bg-slate-800" />
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[10px] tracking-wider text-slate-400">
                  BLUE TEAM:
                </span>
                <span className="text-[10px] tracking-wider text-cyan-400 font-bold">
                  DEFENDING
                </span>
              </div>
              <div className="w-px h-4 bg-slate-800" />
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[10px] tracking-wider text-slate-400">
                  PLAYBOOKS:
                </span>
                <span className="text-[10px] tracking-wider text-amber-400 font-bold">
                  AUTO-EXECUTE ON
                </span>
              </div>
            </div>
          </div>

          {/* Right: Agent Squad Panel */}
          <div className="w-64 flex-shrink-0 flex flex-col gap-3">
            <div className="flex items-center gap-2 px-1">
              <Bug className="w-3.5 h-3.5 text-rose-400" />
              <span className="text-[10px] tracking-[0.15em] text-slate-400 uppercase">
                RedSwarm Squad
              </span>
            </div>
            <div className="flex-1 space-y-2 overflow-y-auto pr-1">
              {agents.map((agent) => (
                <AgentNode key={agent.name} {...agent} />
              ))}
            </div>
            <div className="px-3 py-2 rounded-lg border border-cyan-500/20 bg-cyan-500/5">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[9px] tracking-widest text-slate-500 uppercase">
                  Confidence
                </span>
                <span className="text-[10px] text-cyan-400 font-bold font-mono">
                  94.7%
                </span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-cyan-400 rounded-full shadow-[0_0_6px_rgba(0,212,255,0.5)]"
                  style={{ width: '94.7%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default WarRoom
