import '../App.css'

function AnalysisSelector({ selectedAnalysis, onAnalysisChange }) {
    return (
      <div className="analysis-selector">
        <div className="selector-buttons">
          <button 
            className={selectedAnalysis === 'centrality' ? 'active' : ''}
            onClick={() => onAnalysisChange('centrality')}
          >
            Centrality Analysis
          </button>
          <button 
            className={selectedAnalysis === 'community' ? 'active' : ''}
            onClick={() => onAnalysisChange('community')}
          >
            Community Analysis
          </button>
          {/* <button 
            className={selectedAnalysis === 'genre' ? 'active' : ''}
            onClick={() => onAnalysisChange('genre')}
          >
            Genre Analysis
          </button> */}
          <button 
            className={selectedAnalysis === 'correlation' ? 'active' : ''}
            onClick={() => onAnalysisChange('correlation')}
          >
            Correlation Analysis
          </button>
        </div>
      </div>
    );
  }
  
  export default AnalysisSelector;