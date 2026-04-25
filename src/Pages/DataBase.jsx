import { INITIAL_FACTS } from '../Data/facts'
export default function DataBase() {
    const facts = INITIAL_FACTS
  return (
    <div className="max-w-5xl mx-auto space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-extrabold text-slate-900">Knowledge Base</h2>
                  <p className="text-slate-500 mt-1">Manage the logic and facts of the expert system.</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-slate-400 text-[10px] uppercase tracking-widest font-bold">
                    <tr>
                      <th className="px-6 py-4">Relationship</th>
                      <th className="px-6 py-4">Entity</th>
                      <th className="px-6 py-4">Value</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-slate-100">
                    {facts.map((fact, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-mono text-slate-400 text-xs">{fact.rel}</td>
                        <td className="px-6 py-4 font-bold text-slate-700">{fact.name}</td>
                        <td className="px-6 py-4 text-slate-600">{fact.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
  )
}
