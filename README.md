IMDb Network Analysis Project

## Overview

This project explores the collaborative relationships within the film industry using social network analysis techniques on IMDb data. It focuses on the 2024 film industry dataset, analyzing collaboration patterns between actors, actresses, directors, and writers to identify influential individuals, community structures, and relationship patterns.

The project consists of two main components:
1. **Data Analysis**: Python-based social network analysis using the igraph library in Jupyter notebooks
2. **Interactive Visualization**: Two React-based user interfaces for exploring the results

## Analysis Components

### Data Sources
- IMDb TSV datasets:
  - `name.basics.tsv.gz`: Information about individuals in the film industry
  - `title.basics.tsv.gz`: Information about films and their metadata
  - `title.principals.tsv.gz`: Connections between individuals and movies
  - `title.ratings.tsv.gz`: Ratings information for movies

### Network Analysis Methodology
- **Network Construction**: Built a collaboration network where nodes represent film professionals and edges represent their collaborations
- **Centrality Metrics**: Calculated multiple metrics to identify influential individuals
  - Degree Centrality: Measures direct collaborations
  - Betweenness Centrality: Identifies bridging individuals
  - Closeness Centrality: Measures how quickly someone can reach others
  - Eigenvector Centrality: Identifies connections to other influential people
  - PageRank: Alternative influence measure considering connection quality
- **Community Detection**: Applied the Louvain method to identify communities in the network
- **Role and Genre Analysis**: Examined how roles (actor, actress, director, writer) and genres affect network positioning

### Key Findings
- Identified most central individuals across different metrics
- Detected distinct community structures within the film industry
- Analyzed the relationship between roles and centrality measures
- Explored genre-specific collaboration patterns
- Mapped the collaboration network structure of the 2024 film industry

## Visualization Interfaces

### IMDb Analysis UI (React + Vite)
- **Dashboard**: Overview of key metrics and network statistics
- **Network Visualization**: Interactive force-directed graph of collaborations
- **Centrality Analysis**: Comparison of different centrality metrics
- **Community Detection**: Visualization of identified communities

### Alternative UI (React + Vite + Tailwind)
- **Network Graph**: Interactive visualization of the collaboration network
- **Statistics Panel**: Display of network metrics and centrality scores
- **Centrality Charts**: Distribution of centrality measures by role and genre
- **Community Analysis**: Exploration of community structure and composition

## Tech Stack

### Data Analysis
- **Python**: Core programming language
- **Jupyter Notebook**: Interactive development environment
- **pandas**: Data manipulation and analysis
- **igraph**: Network analysis and modeling
- **matplotlib/seaborn**: Visualization libraries
- **scipy**: Scientific computing
- **pyvis**: Interactive network visualization

### Frontend/UI
- **React**: UI library
- **Vite**: Build tool
- **D3.js**: Data visualization library
- **Recharts**: React charting library
- **react-force-graph**: Network visualization component
- **Bootstrap & Material UI**: UI components and styling
- **Tailwind CSS**: Utility-first CSS framework

## Project Structure
```
├── .gitignore
├── imdb_analysis.ipynb       # Main analysis notebook
├── csv/                      # Processed CSV data files
│   ├── centrality/           # Centrality metrics
│   ├── community/            # Community detection results
│   └── graph/                # Network structure data
├── data/                     # Raw IMDb data files
├── output/                   # Analysis output
│   ├── html/                 # Interactive HTML visualizations
│   └── images/               # Static visualizations
├── imdb-analysis-ui/         # React interface (full featured)
└── ui/                       # Alternative React interface
```

## Screenshots

The project includes various visualizations:
- Network graphs colored by role and community
- Centrality distribution boxplots by role and genre
- Community structure visualizations
- Correlation heatmaps between centrality measures
- Interactive force-directed graphs

## Insights

The analysis reveals several interesting patterns in the 2024 film industry:
- Different roles show distinct centrality patterns (directors often have higher betweenness)
- Strong community structures exist, often organized around genres and production companies
- Specific individuals serve as bridges between different communities
- Genre significantly influences collaboration patterns
- The network exhibits small-world properties typical of creative industries

## Future Directions

- Temporal analysis to track changes in network structure over time
- Predictive modeling for future collaborations
- Expanded analysis including more roles and relationships
- Integration with additional data sources for richer context
- Development of recommendation systems based on network structure

---

*Note: This project was created for educational and research purposes. All data is derived from publicly available IMDb datasets.*

