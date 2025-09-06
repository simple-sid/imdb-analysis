import { useState } from 'react';

function CentralityChart() {
  const [activeTab, setActiveTab] = useState('distribution');
  const [activeDistributionTab, setActiveDistributionTab] = useState('role');
  
  return (
    <div className="centrality-analysis">
      <h2>Centrality Analysis</h2>
      
      {/* Main tabs - now using sub-tabs styling */}
      <div className="centrality-sub-tabs">
        <button 
          className={activeTab === 'distribution' ? 'active' : ''} 
          onClick={() => setActiveTab('distribution')}
        >
          Centrality Distribution
        </button>
        <button 
          className={activeTab === 'individuals' ? 'active' : ''} 
          onClick={() => setActiveTab('individuals')}
        >
          Top Individuals
        </button>
      </div>
      
      {/* Distribution tab content */}
      {activeTab === 'distribution' && (
        <div className="tab-content">
          {/* Sub-tabs for Distribution - now using main-tabs styling */}
          <div className="centrality-main-tabs">
            <button 
              className={activeDistributionTab === 'role' ? 'active' : ''} 
              onClick={() => setActiveDistributionTab('role')}
            >
              By Role
            </button>
            <button 
              className={activeDistributionTab === 'genre' ? 'active' : ''} 
              onClick={() => setActiveDistributionTab('genre')}
            >
              By Genre
            </button>
          </div>
          
          {/* Role distribution content */}
          {activeDistributionTab === 'role' && (
            <div className="chart-container">
              <div className="chart">
                <h4>Degree Centrality by Role</h4>
                <div className="chart-placeholder">
                  <img
                    src="/images/degree_centrality_by_role.png"
                    alt="Degree Centrality Distribution"
                    style={{width: '100%', height: 'auto'}}
                  />
                </div>
              </div>
              <div className="chart">
                <h4>Betweenness Centrality by Role</h4>
                <div className="chart-placeholder">
                  <img
                    src="/images/betweenness_centrality_by_role.png"
                    alt="Betweenness Centrality Distribution"
                    style={{width: '100%', height: 'auto'}}
                  />
                </div>
              </div>
<div className="chart">
                <h4>Closeness Centrality by Role</h4>
                <div className="chart-placeholder">
                  <img
                    src="/images/closeness_centrality_by_role.png"
                    alt="Closeness Centrality Distribution"
                    style={{width: '100%', height: 'auto'}}
                  />
                </div>
              </div>
              <div className="chart">
                <h4>PageRank Centrality by Role</h4>
                <div className="chart-placeholder">
                  <img
                    src="/images/pagerank_centrality_by_role.png"
                    alt="PageRank Centrality Distribution"
                    style={{width: '100%', height: 'auto'}}
                  />
                </div>
              </div>
              <div className="chart">
                <h4>Eigenvector Centrality by Role</h4>
                <div className="chart-placeholder">
                  <img
                    src="/images/eigenvector_centrality_by_role.png"
                    alt="Eigenvector Centrality Distribution"
                    style={{width: '100%', height: 'auto'}}
                  />
                </div>
              </div>
            </div>
          )}
          
          {/* Genre distribution content */}
          {activeDistributionTab === 'genre' && (
            <div className="chart-container">
              <div className="chart">
                <h4>Degree Centrality by Genre</h4>
                <div className="chart-placeholder">
                  <img
                    src="/images/degree_centrality_by_genre.png"
                    alt="Degree Centrality by Genre"
                    style={{width: '100%', height: 'auto'}}
                  />
                </div>
              </div>
              <div className="chart">
                <h4>PageRank Centrality by Genre</h4>
                <div className="chart-placeholder">
                  <img
                    src="/images/pagerank_centrality_by_genre.png"
                    alt="PageRank Centrality by Genre"
                    style={{width: '100%', height: 'auto'}}
                  />
                </div>
              </div>
<div className="chart">
                <h4>Betweenness Centrality by Genre</h4>
                <div className="chart-placeholder">
                  <img
                    src="/images/betweenness_centrality_by_genre.png"
                    alt="Betweenness Centrality by Genre"
                    style={{width: '100%', height: 'auto'}}
                  />
                </div>
              </div>
              <div className="chart">
                <h4>Closeness Centrality by Genre</h4>
                <div className="chart-placeholder">
                  <img
                    src="/images/closeness_centrality_by_genre.png"
                    alt="Closeness Centrality by Genre"
                    style={{width: '100%', height: 'auto'}}
                  />
                </div>
              </div>
              <div className="chart">
                <h4>Eigenvector Centrality by Genre</h4>
                <div className="chart-placeholder">
                  <img
                    src="/images/eigenvector_centrality_by_genre.png"
                    alt="Eigenvector Centrality by Genre"
                    style={{width: '100%', height: 'auto'}}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Top Individuals tab content */}
      {activeTab === 'individuals' && (
        <div className="tab-content">
          <div className="chart-container">
            <div className="chart">
              <h4>Top Individuals by Degree</h4>
              <div className="chart-placeholder">
                <img
                  src="/images/top_10_degree.png"
                  alt="Top by Degree"
                  style={{width: '100%', height: 'auto'}}
                />
              </div>
            </div>
            <div className="chart">
              <h4>Top Individuals by Betweenness</h4>
              <div className="chart-placeholder">
                <img
                  src="/images/top_10_betweenness.png"
                  alt="Top by Betweenness"
                  style={{width: '100%', height: 'auto'}}
                />
              </div>
            </div>
            <div className="chart">
              <h4>Top Individuals by Closeness</h4>
              <div className="chart-placeholder">
                <img
                  src="/images/top_10_closeness.png"
                  alt="Top by Closeness"
                  style={{width: '100%', height: 'auto'}}
                />
              </div>
            </div>
            <div className="chart">
              <h4>Top Individuals by Eigenvector</h4>
              <div className="chart-placeholder">
                <img
                  src="/images/top_10_eigenvector.png"
                  alt="Top by Eigenvector"
                  style={{width: '100%', height: 'auto'}}
                />
              </div>
            </div>
            <div className="chart">
              <h4>Top Individuals by PageRank</h4>
              <div className="chart-placeholder">
                <img
                  src="/images/top_10_pagerank.png"
                  alt="Top by PageRank"
                  style={{width: '100%', height: 'auto'}}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CentralityChart;