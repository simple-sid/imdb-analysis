import { useState, useEffect, useRef, useMemo } from 'react';
import ForceGraph2D from 'react-force-graph-2d';

function NetworkGraph({ selectedRole, selectedCommunity }) {
  const [minDegree, setMinDegree]   = useState(0);
  const [minWeight, setMinWeight]   = useState(1);
  const fgRef                       = useRef();
  const [data, setData]            = useState({nodes:[], links:[]});

  // Load nodes & links JSON on mount
  useEffect(() => {
    async function fetchGraph() {
      const [nodesRes, linksRes] = await Promise.all([
        fetch('/data/imdb_nodes_lightweight_2024.json'),
        fetch('/data/imdb_edges_2024.json')
      ]);
      const [nodes, links] = await Promise.all([
        nodesRes.json(),
        linksRes.json()
      ]);
      setData({ nodes, links });
    }
    fetchGraph();
  }, []);

  // Filter by selectedRole and selectedCommunity
  const filteredData = useMemo(() => {
    const { nodes, links } = data;
    const nodesF = nodes.filter(n =>
      (selectedRole==='all'||n.role===selectedRole) &&
      (selectedCommunity==null||n.community.toString()===selectedCommunity)
    );
    const nodeIds = new Set(nodesF.map(n=>n.id));
    const linksF = links.filter(l=>
      nodeIds.has(l.source)&&
      nodeIds.has(l.target)&&
      l.value >= minWeight
    );
    return { nodes: nodesF, links: linksF };
  }, [data, selectedRole, selectedCommunity]);

  return (
    <div>
      <ForceGraph2D
        ref={fgRef}
        graphData={filteredData}
        width={1300}
        height={600}
        nodeLabel="name"
        nodeAutoColorBy="role"
        linkDirectionalParticles={2}
        linkDirectionalParticleSpeed={0.005}
      />
      <div className="legend">
        <div className="legend-item">
          <span className="color-box actor"></span>
          <span>Actors</span>
        </div>
        <div className="legend-item">
          <span className="color-box actress"></span>
          <span>Actresses</span>
        </div>
        <div className="legend-item">
          <span className="color-box director"></span>
          <span>Directors</span>
        </div>
        <div className="legend-item">
          <span className="color-box writer"></span>
          <span>Writers</span>
        </div>
      </div>
    </div>
  );
}

export default NetworkGraph;
