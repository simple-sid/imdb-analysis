import { useState, useEffect } from 'react';
import '../App.css';

function CommunityAnalysis() {
    const [selectedTab, setSelectedTab] = useState('genre-distribution');
    const [communities, setCommunities] = useState([]);
    const [displayCount, setDisplayCount] = useState(10);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch('/data/community_data.json')
            .then(response => response.json())
            .then(data => {
                setCommunities(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading community data:', error);
                setLoading(false);
            });
    }, []);
    
    const handleViewMore = () => {
        setDisplayCount(50);
    };
    
    const handleViewLess = () => {
        setDisplayCount(10);
        const tableElement = document.querySelector('.communities-table');
        if (tableElement) {
            tableElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    // Data for the role balance table
    const roleBalanceData = [
      { community: 89, size: 5630, actors: '56.8%', actresses: '22.5%', directors: '13.5%', writers: '7.2%' },
      { community: 60, size: 3991, actors: '54.1%', actresses: '24.6%', directors: '11.2%', writers: '10.0%' },
      { community: 153, size: 3859, actors: '43.9%', actresses: '40.1%', directors: '7.2%', writers: '8.7%' },
      { community: 19, size: 2640, actors: '46.2%', actresses: '31.7%', directors: '11.5%', writers: '10.6%' },
      { community: 22, size: 2307, actors: '51.9%', actresses: '34.1%', directors: '9.2%', writers: '4.8%' },
      { community: 13, size: 2162, actors: '50.0%', actresses: '28.1%', directors: '11.9%', writers: '10.0%' },
    ];

    // Genre domination data - Left column
    const genreDominancePercentages = (
      <div>
        <p><strong>Top 10 genre dominance percentage:</strong></p>
        <ul>
          <li>Documentary: 39.2%</li>
          <li>Drama: 25.3%</li>
          <li>Comedy: 11.0%</li>
          <li>Horror: 6.4%</li>
          <li>Action: 5.4%</li>
          <li>Thriller: 3.3%</li>
          <li>Crime: 2.7%</li>
          <li>Biography: 2.5%</li>
          <li>Adventure: 2.4%</li>
          <li>Animation: 1.8%</li>
        </ul>
      </div>
    );

    // Genre domination data - Right column
    const genreDominanceCounts = (
      <div>
        <p><strong>Top 10 genres that dominate communities:</strong></p>
        <ol>
          <li>Documentary: dominates 1995 communities</li>
          <li>Drama: dominates 1290 communities</li>
          <li>Comedy: dominates 562 communities</li>
          <li>Horror: dominates 324 communities</li>
          <li>Action: dominates 275 communities</li>
          <li>Thriller: dominates 168 communities</li>
          <li>Crime: dominates 135 communities</li>
          <li>Biography: dominates 126 communities</li>
          <li>Adventure: dominates 124 communities</li>
          <li>Animation: dominates 91 communities</li>
        </ol>
      </div>
    );

    // Role domination data
    const roleDominationInfo = (
      <div className="text-center">
        <p><strong>All roles that dominate communities:</strong></p>
        <ol style={{display: 'inline-block', textAlign: 'left'}}>
          <li>Actors: dominates <b>3096</b> communities</li>
          <li>Directors: dominates <b>1085</b> communities</li>
          <li>Actresses: dominates <b>1026</b> communities</li>
          <li>Writers: dominates <b>479</b> communities</li>
        </ol>
      </div>
    );

    // Define the tabs
    const communityTabs = [
      { id: 'genre-distribution', label: 'Genre Distribution' },
      { id: 'role-distribution', label: 'Role Distribution' },
      { id: 'genre-domination', label: 'Genre Domination' },
      { id: 'role-domination', label: 'Role Domination' },
    ];
    
    return (
      <div className="community-analysis">
        <h2>Community Analysis</h2>
        
        <div className="community-charts-container">
          <div className="community-overview">
            <h4>Community Distribution</h4>
            <div className="chart-placeholder">
              <img 
                src="/images/communities_network.png"
                alt="Communities"
                style={{width: '100%', height: 'auto'}}
              />
            </div>
            <p className="chart-description">Detected <b>5686</b> communities.</p>
          </div>

          <div className="community-overview">
            <h4>Largest Community</h4>
            <div className="chart-placeholder">
              <img 
                src="/images/largest_community.png"
                alt="Largest Community"
                style={{width: '100%', height: 'auto'}}
              />
            </div>
            <p className="chart-description">Largest community ID: 89, size: 5630 nodes</p>
          </div>
        </div>
        
        <div className="communities-table">
          <h4>Identified Communities</h4>
          {loading ? (
            <p>Loading community data...</p>
          ) : (
            <>
              <table>
                <thead>
                  <tr>
                    <th>Community ID</th>
                    <th>Size</th>
                    <th>Dominant Role</th>
                    <th>Dominant Genre</th>
                  </tr>
                </thead>
                <tbody>
                  {communities.slice(0, displayCount).map(community => (
                    <tr key={community.id}>
                      <td>{community.id}</td>
                      <td>{community.size}</td>
                      <td>{community.dominantRole}</td>
                      <td>{community.dominantGenre}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <div className="view-more-container">
                {displayCount < communities.length ? (
                  <button 
                    className="view-more-btn"
                    onClick={handleViewMore}
                  >
                    View More Communities
                  </button>
                ) : (
                  <button 
                    className="view-less-btn"
                    onClick={handleViewLess}
                  >
                    View Less
                  </button>
                )}
              </div>
            </>
          )}
        </div>
        
        <div className="community-distribution-analysis">
          <h4>Community Composition Analysis</h4>
          
          <div className="centrality-main-tabs">
            {communityTabs.map(tab => (
              <button 
                key={tab.id}
                className={selectedTab === tab.id ? 'active' : ''}
                onClick={() => setSelectedTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          <div className="community-distribution-content">
            {/* Genre Distribution Tab */}
            {selectedTab === 'genre-distribution' && (
              <div className="genre-distribution-container">
                <div className="chart-row">
                  <div className="chart-column">
                    <h5>Largest Community</h5>
                    <img 
                      src="/images/community_89_genre_pie.png" 
                      alt="Largest Community Genre Distribution"
                      style={{width: '100%', height: 'auto'}}
                    />
                  </div>
                  <div className="chart-column">
                    <h5>Second Largest</h5>
                    <img 
                      src="/images/genre_pie_charts/community_60_genre_pie.png" 
                      alt="Second Largest Community Genre Distribution"
                      style={{width: '100%', height: 'auto'}}
                    />
                  </div>
                </div>
                <div className="chart-row">
                  <div className="chart-column">
                    <h5>Third Largest</h5>
                    <img 
                      src="/images/genre_pie_charts/community_153_genre_pie.png" 
                      alt="Third Largest Community Genre Distribution"
                      style={{width: '100%', height: 'auto'}}
                    />
                  </div>
                  <div className="chart-column">
                    <h5>Fourth Largest</h5>
                    <img 
                      src="/images/genre_pie_charts/community_19_genre_pie.png" 
                      alt="Fourth Largest Community Genre Distribution"
                      style={{width: '100%', height: 'auto'}}
                    />
                  </div>
                </div>
                <div className="chart-row">
                  <div className="chart-column">
                    <h5>Fifth Largest</h5>
                    <img 
                      src="/images/genre_pie_charts/community_22_genre_pie.png" 
                      alt="Fifth Largest Community Genre Distribution"
                      style={{width: '100%', height: 'auto'}}
                    />
                  </div>
                  <div className="chart-column">
                    <h5>Sixth Largest</h5>
                    <img 
                      src="/images/genre_pie_charts/community_13_genre_pie.png" 
                      alt="Sixth Largest Community Genre Distribution"
                      style={{width: '100%', height: 'auto'}}
                    />
                  </div>
                </div>
                <p className="stat-description">Number of genre-specific communities: <b>4057</b></p>
              </div>
            )}

            {/* Role Distribution Tab */}
            {selectedTab === 'role-distribution' && (
              <div className="role-distribution-container">
                <div className="role-comparison-chart">
                  <img 
                    src="/images/top_communities_role_comparison.png"
                    alt="Role Distribution Comparison"
                    style={{width: '100%', height: 'auto'}}
                  />
                </div>
                <div className="role-balance-table">
                  <h5>Role Balance in Top 6 Communities</h5>
                  <table>
                    <thead>
                      <tr>
                        <th>Community</th>
                        <th>Size</th>
                        <th>Actors</th>
                        <th>Actresses</th>
                        <th>Directors</th>
                        <th>Writers</th>
                      </tr>
                    </thead>
                    <tbody>
                      {roleBalanceData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.community}</td>
                          <td>{row.size}</td>
                          <td>{row.actors}</td>
                          <td>{row.actresses}</td>
                          <td>{row.directors}</td>
                          <td>{row.writers}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="stat-description">Number of role-specific communities: <b>929</b></p>
              </div>
            )}
            
            {/* Genre Domination Tab */}
            {selectedTab === 'genre-domination' && (
              <div className="genre-domination-container">
                <div className="domination-chart">
                  <img 
                    src="/images/top_dominant_genres.png"
                    alt="Top Dominant Genres"
                    style={{width: '80%', height: 'auto', margin: '0 auto', display: 'block'}}
                  />
                </div>
                <div className="domination-description">
                  <div className="two-column-layout">
                    <div className="column">
                      {genreDominanceCounts}
                    </div>
                    <div className="column">
                      {genreDominancePercentages}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Role Domination Tab */}
            {selectedTab === 'role-domination' && (
              <div className="role-domination-container">
                <div className="domination-chart">
                  <img 
                    src="/images/all_dominant_roles_pie.png"
                    alt="All Dominant Roles"
                    style={{width: '80%', height: 'auto', margin: '0 auto', display: 'block'}}
                  />
                </div>
                <div className="domination-description">
                  {roleDominationInfo}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  export default CommunityAnalysis;