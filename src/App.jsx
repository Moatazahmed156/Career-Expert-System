import { useState, useMemo } from 'react';
import { INITIAL_FACTS } from './Data/facts';
import DataBase from './Pages/DataBase';
import Engine from './Pages/Engine';
import SideBar from './Components/SideBar';
import Layout from './Components/Layout';

export default function App() {
  const facts = INITIAL_FACTS
  const [selectedUser, setSelectedUser] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard'); 

  const users = useMemo(() => [...new Set(facts.filter(f => f.rel === 'has_skill').map(f => f.name))], [facts]);

  // Inference Engine Logic
  const getSuggestions = (userName) => {
    if (!userName) return null;

    const userSkills = facts
      .filter(f => f.name === userName && f.rel === 'has_skill')
      .map(f => f.value);

    const careerMap = {};
    facts.filter(f => f.rel === 'requires_skill').forEach(f => {
      if (!careerMap[f.name]) careerMap[f.name] = [];
      careerMap[f.name].push(f.value);
    });

    const results = Object.keys(careerMap).map(careerName => {
      const required = careerMap[careerName];
      const matched = required.filter(skill => userSkills.includes(skill));
      const score = matched.length;
      const percentage = Math.round((matched.length / required.length) * 100);
      
      return {
        name: careerName,
        score,
        percentage,
        matchedSkills: matched,
        missingSkills: required.filter(skill => !userSkills.includes(skill))
      };
    }).sort((a, b) => b.percentage - a.percentage);

    return {
      best: results[0],
      all: results,
      userSkills
    };
  };

  const currentAnalysis = useMemo(() => getSuggestions(selectedUser), [selectedUser, facts]);

  return (
    <div className="min-h-screen bg-slate-50 flex text-slate-900 font-sans">
      {/* Sidebar */}
      <SideBar setActiveTab={setActiveTab} activeTab={activeTab} users={users} setSelectedUser={setSelectedUser} selectedUser={selectedUser} />
      {/* Main Content */}
      <Layout activeTab={activeTab}>
        <div className="p-8">
          {activeTab === 'dashboard' ? (
             <Engine currentAnalysis={currentAnalysis} selectedUser={selectedUser} />
          ) : (
           <DataBase />
          )}
        </div>
    </Layout>
    </div>
  );
}