import { 
  BrainCircuit, 
  ChevronRight,
  Database,
  Cpu
} from 'lucide-react';

export default function SideBar({setActiveTab, activeTab, users, setSelectedUser, selectedUser}) {
  return (
      <aside  className="w-72 bg-slate-900 text-white flex flex-col shadow-xl h-screen fixed">
        <div className="p-6 flex items-center gap-3 border-b border-slate-800">
          <div className="p-2 bg-indigo-500 rounded-lg">
            <Cpu size={24} className="text-white" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">ExpertSys v2</h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'dashboard' ? 'bg-indigo-600 text-white shadow-lg' : 'hover:bg-slate-800 text-slate-400'}`}
          >
            <BrainCircuit size={20} />
            Inference Engine
          </button>
          <button 
            onClick={() => setActiveTab('knowledge-base')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'knowledge-base' ? 'bg-indigo-600 text-white shadow-lg' : 'hover:bg-slate-800 text-slate-400'}`}
          >
            <Database size={20} />
            Knowledge Base
          </button>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <p className="text-xs uppercase text-slate-500 font-bold mb-4 px-2">Active Users</p>
          <div className="space-y-1">
            {!users ? <p>No Users Found</p> : users.map(user => (
              <button
                key={user}
                onClick={() => {
                  setSelectedUser(user);
                  setActiveTab('dashboard');
                }}
                className={`w-full flex items-center justify-between px-4 py-2 rounded-lg transition-all ${selectedUser === user ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
              >
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  {user}
                </div>
                <ChevronRight size={14} className={selectedUser === user ? 'opacity-100' : 'opacity-0'} />
              </button>
            ))}
          </div>
        </div>
      </aside>
  )
}
