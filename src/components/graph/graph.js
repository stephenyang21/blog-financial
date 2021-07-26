import React from 'react'
import './graph.css'
import StockGraph from './stockgraph'
import BenchmarkData from './benchmarkdata'

function Tablegraph() {
    
    return (
        <> 
            <div className="main_graph">
                <div className="graph_table">
                    <StockGraph/>
                </div>
                <div className="graph_bench">
                    <BenchmarkData />
                </div>
            </div>
        </>
    )
}

export default Tablegraph;