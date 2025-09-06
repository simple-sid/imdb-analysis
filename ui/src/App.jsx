import { useState } from 'react';
import './App.css';
import NetworkGraph from './components/NetworkGraph';
import StatisticsPanel from './components/StatisticsPanel';
import AnalysisSelector from './components/AnalysisSelector';
import CentralityChart from './components/CentralityChart';
import CommunityAnalysis from './components/CommunityAnalysis';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle'
import RoleFilter       from './components/RoleFilter';
import CommunityFilter  from './components/CommunityFilter';

function App() {
  const [activeTab, setActiveTab] = useState('network');
  const [selectedAnalysis, setSelectedAnalysis] = useState('centrality');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  
  return (
    <div className="app">
      <ThemeToggle />
      <Header />
      
      <nav className="main-nav">
        <div className="tabs">
          <button 
            className={activeTab === 'network' ? 'active' : ''} 
            onClick={() => setActiveTab('network')}>
            Network Visualization
          </button>
          <button 
            className={activeTab === 'analysis' ? 'active' : ''} 
            onClick={() => setActiveTab('analysis')}>
            Data Analysis
          </button>
        </div>
      </nav>
      
      <main className="content">
        {activeTab === 'network' && (
          <div className="network-view">
            <div className="filters">
              <div className="filter-group">
                <label>Filter by Role:</label>
                <RoleFilter
                  selectedRole={selectedRole}
                  onChange={setSelectedRole}
                />
              </div>
              
              <div className="filter-group">
                <label>Filter by Community:</label>
                <CommunityFilter
                  selectedCommunity={selectedCommunity}
                  onChange={setSelectedCommunity}
                />
              </div>
            </div>
            
            <div className="network-container">
              <NetworkGraph 
                selectedRole={selectedRole} 
                selectedCommunity={selectedCommunity} 
              />
            </div>
            
            <StatisticsPanel 
              selectedRole={selectedRole} 
              selectedCommunity={selectedCommunity} 
            />
          </div>
        )}
        
        {activeTab === 'analysis' && (
          <div className="analysis-view">
            <AnalysisSelector 
              selectedAnalysis={selectedAnalysis} 
              onAnalysisChange={setSelectedAnalysis} 
            />
            
            <div className="analysis-content">
              {selectedAnalysis === 'centrality' && (
                <CentralityChart />
              )}
              {selectedAnalysis === 'community' && (
                <CommunityAnalysis />
              )}
              {selectedAnalysis === 'genre' && (
                <div className="genre-analysis">
                  <h3>Genre-based Analysis</h3>
                  <div className="genre-charts">
                    <div className="chart">
                      <h4>Genre Distribution in Communities</h4>
                      <div className="chart-placeholder">
                        [Genre Distribution Chart]
                      </div>
                    </div>
                    <div className="chart">
                      <h4>Genre Correlation with Centrality</h4>
                      <div className="chart-placeholder">
                        [Genre-Centrality Correlation Chart]  
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {selectedAnalysis === 'correlation' && (
                <div className="correlation-analysis">
                  <h2>Correlation Analysis</h2>
                  <div className="correlation-charts">
                    <div className="chart">
                      <h3>Centrality vs IMDb Ratings</h3>
                      <div className="chart-placeholder">
                        <img
                          src="/images/rating_correlation_bars.png"
                          alt="Rating Correlation"
                          style={{width: '100%', height: 'auto'}}
                        />
                      </div>
                    </div>
                    <div className="chart">
                      <h3>Centrality Measure Correlations</h3>
                      <div className="chart-placeholder">
                        <img 
                          src="/images/centrality_correlation.png"
                          alt="Centrality Correlation"
                          style={{width: '100%', height: 'auto'}}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;