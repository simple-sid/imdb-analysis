import React, { useState, useEffect } from 'react';

function RoleFilter({ selectedRole, onChange }) {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetch('/data/imdb_nodes_lightweight_2024.json')
      .then(res => res.json())
      .then(nodes => {
        const uniq = Array.from(
          new Set(nodes.map(n => n.role))
        ).sort();
        setRoles(uniq);
      });
  }, []);

  return (
    <select
      value={selectedRole}
      onChange={e => onChange(e.target.value)}
    >
      <option value="all">All Roles</option>
      {roles.map(r => (
        <option key={r} value={r}>
          {r.charAt(0).toUpperCase() + r.slice(1)}
        </option>
      ))}
    </select>
  );
}

export default RoleFilter;