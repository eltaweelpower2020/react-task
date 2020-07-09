import React from "react"
import Option from "./Option"
const Options = (props)=>{
    return (
        <div>
            <div className='widget-header'>
                <h3>Your Options</h3>
                <button className='button button--link' onClick={props.handleDeleteOptions}>Remove All</button>
            </div>
            {props.options.length === 0 && <p className='widget-message'>Please add new option to get started!</p>}
           {props.options.map((opt,index)=>{
               return <Option key={opt} option={opt} count={index + 1 } removeSelected={props.removeSelected}/>
           })}
            
        </div>
    );
}
export default  Options
