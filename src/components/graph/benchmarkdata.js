import React, {useState} from 'react';
import DisplayBenchMarkData from './displaybenchmark'

function BenchmarkData(){
    const benchMarkList = ['IBOV', 'USDBRL', 'NASDAQ','BITCOIN']
    const timeFrameList = ['1W','1M','3M','1Y']

    const [timeFrame,setTimeFrame, ] = useState('1Y');
    const [benchMark,setBenchMark ] = useState('IBOV');


    
    const renderButton = (benchMark)=>{
        return benchMark.map((info,_)=>{
            return <button type="info" onClick ={()=>setBenchMark(info)} >{info}</button>} 
            ) } 
    const renderButtonTime = (timeFrame)=>{
        return timeFrame.map((info,_)=>{
            return <button type="info" onClick ={()=>setTimeFrame(info)} >{info}</button>} 
            ) } 

    console.log(timeFrame,benchMark)

    return(
        <>
            <p id="title_bench">Andamento Mercado</p>
            <div className="benchMarkdisplay">
                <div className='button_list_bench'>
                    {renderButton(benchMarkList)}
                </div>
                <div className='list_time_frame'>
                    {renderButtonTime(timeFrameList)}
                </div>
                <div className='display_data_benchmark'>
                    <DisplayBenchMarkData benchMark ={benchMark} timeFrame = {timeFrame}/>
                </div>
            </div>
        </>
    )
}export default BenchmarkData;