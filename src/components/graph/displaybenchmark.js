import React from 'react'
import { Line } from 'react-chartjs-2';
import IBOV from '../../components/data/ibov'
import USDBRL from '../../components/data/usdbrl'
import BITCOIN from '../../components/data/bitcoin'
import NASDAQ from '../../components/data/nasdaq'
import RUSSEL2000 from '../../components/data/russel2000'
const  dePara={
    '1W':5,
    '1M':21,
    '3M':21*3,
    '1Y':255,
    '5Y':255*5,
}

const deParaData ={
    IBOV,
    USDBRL,
    BITCOIN,
    NASDAQ,
    'RUSSELL 2000': RUSSEL2000,

}

function DisplayBenchMarkData ({benchMark,timeFrame}){
    
    const dataBench = deParaData[benchMark]
    const dataIBOV =dataBench.slice(Math.max(dataBench.length - dePara[timeFrame], 1));
   
    const data  ={
        labels : dataIBOV.map( data=>data['Date']),
        datasets : [{
            label: `${benchMark} - ${timeFrame}`,
            data :dataIBOV.map( data=>data['Close']),
            fill: false,
            backgroundColor: '#65CCB8',
            borderColor: '#182628',
            pointRadius: 1,
            
        }],
    }

    const options = {
        
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                  ticks: {
                    // For a category axis, the val is the index so the lookup via getLabelForValue is needed
                    callback: function(val, index) {
                      // Hide the label of every 2nd dataset
                      return index % 5 === 0 ? this.getLabelForValue(val) : '';
                    },
                    display:false,
                     
                  }
                }
              },
             layout: {
                    padding: {
                        right: 10
                    }
                
            }
        
      };
    return(
        <>
            <div >
             <Line data={data} options={options}/>
            </div>
        </>
    )
}
export default DisplayBenchMarkData