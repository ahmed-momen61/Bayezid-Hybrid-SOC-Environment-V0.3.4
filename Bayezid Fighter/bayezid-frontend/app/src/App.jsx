import Sidebar from './components/Sidebar'
import WarRoom from './components/WarRoom'
import AlertRadar from './components/AlertRadar'

const App = () => {
  return (
    <div className="h-screen w-screen bg-slate-950 text-slate-100 overflow-hidden flex cyber-grid-bg">
      {/* Left Column - Sidebar Navigation */}
      <Sidebar />

      {/* Middle Column - Digital War Room */}
      <WarRoom />

      {/* Right Column - Live Alerts Radar */}
      <AlertRadar />
    </div>
  )
}

export default App
