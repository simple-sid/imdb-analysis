import React, { useState, useEffect } from 'react';
import '../App.css';

function StatisticsPanel({ selectedRole, selectedCommunity }) {
  const [individuals, setIndividuals] = useState([]);
  const [viewMore, setViewMore]       = useState(false);

  const stats = {
    nodes: 110933,
    edges: 611885,
    avgDegree: 11.03,
    diameter: 25,
    communities: 5686,
    density: 0.00010
  };

  useEffect(() => {
    fetch('/data/centrality_scores_2024.json')
      .then(res => {
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        return res.json();
      })
      .then(rawData => {
        console.log('centrality sample:', rawData.slice(0,3));  // inspect keys
        
        const parsed = rawData.map(person => {
          // grab pagerank from whichever key it lives under
          const prRaw =
            person.pagerank ??       // lowercase
            person.PageRank ??       // CamelCase
            person.PAGERANK ??       // uppercase
            '0';
          
          return {
            ...person,
            degree:   Number(person.degree),
            pagerank: parseFloat(prRaw)
          };
        });

        // optionally filter by role/community before table
        const filtered = parsed.filter(p =>
          (selectedRole==='all'         || p.role === selectedRole) &&
          (selectedCommunity == null    || String(p.community) === selectedCommunity)
        );

        // sort by degree (or swap to pagerank)
        const sorted = filtered.sort((a, b) => b.degree - a.degree);
        setIndividuals(sorted);
      })
      .catch(err => console.error(err));
  }, [selectedRole, selectedCommunity]);

  const displayCount = viewMore ? 20 : 5;
  const displayList  = individuals.slice(0, displayCount);

  return (
    <div className="statistics-panel">
      <h3>Network Statistics</h3>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-label">Nodes:</span>
            <span className="stat-value">{stats.nodes}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Edges:</span>
            <span className="stat-value">{stats.edges}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Avg. Degree:</span>
            <span className="stat-value">{stats.avgDegree}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Diameter:</span>
            <span className="stat-value">{stats.diameter}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Communities:</span>
            <span className="stat-value">{stats.communities}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Density:</span>
            <span className="stat-value">{stats.density}</span>
          </div>
        </div>
      <div className="top-individuals">
        <h4>Top Individuals by Degree</h4>
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Degree</th>
            <th>PageRank (×10⁻⁴)</th>  {/* updated header */}
          </tr>
        </thead>
        <tbody>
          {displayList.map(person => (
            <tr key={person.nconst}>
              <td>{person.primaryName}</td>
              <td>
                {person.role.charAt(0).toUpperCase() + person.role.slice(1)}
              </td>
              <td>{person.degree}</td>
              <td>
                {/* scale up by 10⁴ for visibility */}
                {(person.pagerank * 1e4).toFixed(3)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        {individuals.length > 5 && (
          <button 
            className="view-more-btn"
            onClick={() => setViewMore(!viewMore)}>
            {viewMore ? 'View Less' : 'View More'}
          </button>
        )}
      </div>
    </div>
  );
}

export default StatisticsPanel;