import { ChevronRight}  from 'lucide-react';
export default function Layout({ children, activeTab }) {
  return (
    <main className="ml-72 flex-1 overflow-y-auto">
            <header className=" h-16 bg-white border-b flex items-center justify-between px-8 sticky top-0 z-10">
              <div className="flex items-center gap-2 text-slate-500">
                <span className="text-sm font-medium">Platform</span>
                <ChevronRight size={14} />
                <span className="text-sm font-semibold text-slate-900 capitalize">{activeTab.replace('-', ' ')}</span>
              </div>
              <div className="flex items-center gap-4">
                 <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                    System Active
                 </div>
              </div>
            </header>
            {children}
            </main>
  )
}
