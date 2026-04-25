import React from 'react'
import { 
  User, 
  Briefcase, 
  Trophy, 
  Search, 
  CheckCircle2, 
  Info,
} from 'lucide-react';
export default function Engine({ currentAnalysis , selectedUser}) {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
              {/* Analysis Header */}
              <div className="flex items-end justify-between">
                <div>
                  <h2 className="text-3xl font-extrabold text-slate-900">Career Diagnostics</h2>
                  <p className="text-slate-500 mt-1">AI-driven mapping based on your professional facts.</p>
                </div>
                <div className="flex gap-2">
                   {!selectedUser && (
                     <div className="flex items-center gap-2 text-indigo-600 bg-indigo-50 px-4 py-2 rounded-lg text-sm font-bold border border-indigo-100">
                       <Info size={16} />
                       Select a user from the sidebar to begin
                     </div>
                   )}
                </div>
              </div>

              {selectedUser && currentAnalysis && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  
                  {/* Left Column: Profile & Skills */}
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
                          <User size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{selectedUser}</h3>
                          <p className="text-xs text-slate-400">Professional Profile</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Identified Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {currentAnalysis.userSkills.map(skill => (
                            <span key={skill} className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-xl text-sm font-semibold border border-slate-200">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-indigo-600 p-6 rounded-3xl text-white shadow-xl shadow-indigo-200">
                       <div className="flex items-center gap-3 mb-4">
                         <Trophy size={20} className="text-indigo-200" />
                         <span className="font-bold">Top Recommendation</span>
                       </div>
                       <h3 className="text-2xl font-black mb-1">{currentAnalysis.best?.name || 'N/A'}</h3>
                       <p className="text-indigo-100 text-sm mb-4">Matching {currentAnalysis.best?.percentage}% of requirements</p>
                       <div className="h-2 w-full bg-indigo-500/50 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-white rounded-full transition-all duration-1000"
                            style={{ width: `${currentAnalysis.best?.percentage || 0}%` }}
                          ></div>
                       </div>
                    </div>
                  </div>

                  {/* Middle/Right Column: Detailed Analysis */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                      <div className="p-6 border-b flex justify-between items-center bg-slate-50/50">
                        <h3 className="font-bold flex items-center gap-2">
                          <Search size={18} className="text-slate-400" />
                          Ranked Matches
                        </h3>
                        <span className="text-xs text-slate-400 font-medium">Inference computed in 2ms</span>
                      </div>
                      <div className="divide-y divide-slate-100">
                        {currentAnalysis.all.map((career) => (
                          <div key={career.name} className="p-6 hover:bg-slate-50 transition-colors">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex gap-4">
                                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500">
                                  <Briefcase size={20} />
                                </div>
                                <div>
                                  <h4 className="font-bold text-slate-800">{career.name}</h4>
                                  <div className="flex gap-3 mt-1">
                                    <span className="text-xs font-semibold text-slate-400">{career.matchedSkills.length} Matches</span>
                                    <span className="text-xs font-semibold text-slate-400">{career.missingSkills.length} Missing</span>
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <span className={`text-xl font-black ${career.percentage > 70 ? 'text-green-500' : career.percentage > 40 ? 'text-amber-500' : 'text-slate-400'}`}>
                                  {career.percentage}%
                                </span>
                                <p className="text-[10px] uppercase font-bold text-slate-300">Confidence</p>
                              </div>
                            </div>
                            
                            {/* Skills Breakdown */}
                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-green-50/50 p-3 rounded-2xl border border-green-100">
                                <p className="text-[10px] font-bold text-green-700 uppercase mb-2">Matching Strengths</p>
                                <div className="flex flex-wrap gap-1.5">
                                  {career.matchedSkills.length > 0 ? career.matchedSkills.map(s => (
                                    <span key={s} className="bg-white text-green-700 px-2 py-0.5 rounded-lg text-[11px] font-bold border border-green-200">
                                      {s}
                                    </span>
                                  )) : <span className="text-xs text-green-600 italic">None</span>}
                                </div>
                              </div>
                              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                                <p className="text-[10px] font-bold text-slate-500 uppercase mb-2">Gaps to Close</p>
                                <div className="flex flex-wrap gap-1.5">
                                  {career.missingSkills.length > 0 ? career.missingSkills.map(s => (
                                    <span key={s} className="bg-white text-slate-400 px-2 py-0.5 rounded-lg text-[11px] font-medium border border-slate-200">
                                      {s}
                                    </span>
                                  )) : <span className="text-xs text-slate-400 italic font-medium flex items-center gap-1"><CheckCircle2 size={12} className="text-green-500" /> Fully Qualified</span>}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
  )
}
