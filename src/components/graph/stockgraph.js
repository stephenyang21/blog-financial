import React from 'react'
import './graph.css'

function StockGraph() {
    let graphData = 
        [{
                stock:'VALE3',
                price:122.3,
                dailyChange: 2.31,
                absDailyChange:1.23,   
                name:'Vale SA'
            },
            {
                stock:'BPAC11',
                price:32.2,
                dailyChange: 1.23, 
                absDailyChange:0.33, 
                name:'Banco BTG Pactual' 
            },            {
                stock:'AMER3',
                price:61.33,
                dailyChange: 3.23,
                absDailyChange:1.52, 
                name: 'Lojas Americanas'
            },
            {
                stock:'YDUQ3',
                price:32.14,
                dailyChange: -0.47,
                absDailyChange:-0.32, 
                name:'YDUQS Participações SA'
            },{
                stock:'PFRM3',
                price:6.29,
                dailyChange: 2.28,
                absDailyChange: 0.25,
                name:'Profarma Distribuidora de Produtos Frm SA'
            }]
   


    const renderTableData = (data)=>{
        return data.map((stockInfo, index)=>{
            const{stock, price, dailyChange, name,absDailyChange} =stockInfo
            return (
                <tr key={index} >
                   <td >{stock}
                     <br/><p id="company_name_tag">{name}</p>
                   </td>
                   <td>{price}</td>
                   <td style={dailyChange>0? {color:"green"}:{color:"red"}}>
                       {dailyChange>0 ? "+":""}{dailyChange}%
                       <br/><p>{dailyChange>0 ? "+":""}{absDailyChange}</p>
                </td>
                </tr>
        )})
    }

     
    
  
    return(
        <>
            <p id="title_table_stock">Destaque de hoje</p>
            
            <div>
                <table id='stockInfo'>
                    <tbody>
                       
                    {renderTableData(graphData)}
                </tbody>
                </table>
            </div>
        </>
      )
}

export default StockGraph;