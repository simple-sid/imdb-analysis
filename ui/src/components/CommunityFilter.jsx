import React, { useState, useEffect } from 'react';

function CommunityFilter({ selectedCommunity, onChange }) {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    fetch('/data/imdb_nodes_lightweight_2024.json')
      .then(res => res.json())
      .then(nodes => {
        const uniq = Array.from(
          new Set(nodes.map(n => n.community))
        ).sort((a,b)=>a-b);
        setCommunities(uniq.slice(0,20));  // only 20
      });
  }, []);

  return (
    <select
      value={selectedCommunity ?? ''}
      onChange={e => onChange(e.target.value || null)}
    >
      <option value="">All Communities</option>
      {communities.map(c => (
        <option key={c} value={c}>{c}</option>
      ))}
    </select>
  );
}

export default CommunityFilter;