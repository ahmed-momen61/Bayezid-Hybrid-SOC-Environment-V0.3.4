
import {
  LayoutDashboard,
  Swords,
  Bug,
  Shield,
  Settings,
  Radio,
  ChevronRight,
  Activity
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { socket } from '../socket' 
const navItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    team: 'blue',
  },
  {
    id: 'warroom',
    label: 'War Room',
    icon: Swords,
    team: 'blue',
  },
  {
    id: 'redswarm',
    label: 'RedSwarm',
    icon: Bug,
    team: 'red',
  },
  {
    id: 'shields',
    label: 'Blue Shields',
    icon: Shield,
    team: 'blue',
  },
  {
    id: 'intel',
    label: 'Threat Intel',
    icon: Activity,
    team: 'red',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: Settings,
    team: null,
  },
]

const teamIndicatorColors = {
  blue: 'bg-cyan-400 shadow-[0_0_8px_rgba(0,212,255,0.6)]',
  red: 'bg-rose-500 shadow-[0_0_8px_rgba(255,0,64,0.6)]',
  null: 'bg-slate-600',
}

const teamBadgeColors = {
  blue: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10',
  red: 'text-rose-400 border-rose-400/30 bg-rose-400/10',
  null: 'text-slate-500 border-slate-600/30 bg-slate-600/10',
}

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('warroom')
  const [collapsed, setCollapsed] = useState(false)

const [isConnected, setIsConnected] = useState(socket.connected)

  useEffect(() => {
    const onConnect = () => setIsConnected(true)
    const onDisconnect = () => setIsConnected(false)

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
    }
  }, [])

  return (
    <aside
      className={`${collapsed ? 'w-16' : 'w-56'} h-full bg-slate-900/90 border-r border-slate-800 flex flex-col transition-all duration-300 backdrop-blur-md flex-shrink-0`}
    >
      {/* Logo / Brand */}
      <div className="flex items-center gap-3 px-4 h-16 border-b border-slate-800">
        <div className="flex items-center justify-center w-8 h-8 rounded bg-slate-800 border border-slate-700 flex-shrink-0">
          <Radio className="w-4 h-4 text-cyan-400" />
        </div>
        {!collapsed && (
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-bold tracking-wider text-slate-100 cyber-glow-blue whitespace-nowrap">
              BAYEZID
            </span>
            <span className="text-[9px] tracking-[0.2em] text-slate-500 uppercase">
              Hybrid SOC v3
            </span>
          </div>
        )}
      </div>

      {/* Mode Indicator */}
      {!collapsed && (
        <div className="px-4 py-3 border-b border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-[10px] tracking-widest text-slate-500 uppercase">
              Mode
            </span>
            <div className="flex items-center gap-2">
              <span className="status-dot bg-cyan-400 animate-pulse" />
              <span className="text-[10px] font-bold text-cyan-400 tracking-wider">
                BLUE TEAM
              </span>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-cyan-400 rounded-full shadow-[0_0_6px_rgba(0,212,255,0.5)]" />
            </div>
            <span className="text-[9px] text-slate-500">SOAR</span>
          </div>
        </div>
      )}

      {/* Navigation Items */}
      <nav className="flex-1 py-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeItem === item.id

          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all duration-200 group ${
                isActive ? 'nav-item-active' : 'nav-item-inactive'
              }`}
            >
              <div className="relative flex-shrink-0">
                <Icon
                  className={`w-4 h-4 transition-colors ${
                    isActive
                      ? item.team === 'red'
                        ? 'text-rose-400'
                        : 'text-cyan-400'
                      : 'text-slate-500 group-hover:text-slate-300'
                  }`}
                />
                {item.team && (
                  <div
                    className={`absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full ${teamIndicatorColors[item.team]}`}
                  />
                )}
              </div>
              {!collapsed && (
                <>
                  <span
                    className={`text-xs font-medium tracking-wide flex-1 ${
                      isActive ? 'text-slate-100' : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.team && (
                    <span
                      className={`text-[9px] px-1.5 py-0.5 rounded border ${teamBadgeColors[item.team]}`}
                    >
                      {item.team === 'blue' ? 'DEF' : 'OFF'}
                    </span>
                  )}
                  {isActive && (
                    <ChevronRight className="w-3 h-3 text-cyan-400" />
                  )}
                </>
              )}
            </button>
          )
        })}
      </nav>

      {/* Bottom Status */}
      <div className="border-t border-slate-800 p-3 space-y-2">
        {!collapsed ? (
          <>
            <div className="flex items-center justify-between">
              <span className="text-[9px] tracking-widest text-slate-600 uppercase">
                Engine
              </span>
              <span className="text-[9px] text-emerald-400 font-mono">
                LOCAL AI
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] tracking-widest text-slate-600 uppercase">
                Socket
              </span>
              <div className="flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isConnected ? 'bg-emerald-400' : 'bg-rose-500'}`} />
                <span className={`text-[9px] font-mono ${isConnected ? 'text-emerald-400' : 'text-rose-500'}`}>
                  {isConnected ? 'LIVE' : 'OFFLINE'}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] tracking-widest text-slate-600 uppercase">
                DB
              </span>
              <span className="text-[9px] text-cyan-400 font-mono">
                PostgreSQL
              </span>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
          </div>
        )}

        {/* Collapse Toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center py-1.5 mt-2 rounded border border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 transition-all"
        >
          <ChevronRight
            className={`w-3 h-3 text-slate-500 transition-transform duration-300 ${
              collapsed ? '' : 'rotate-180'
            }`}
          />
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
