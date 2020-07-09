import React from "react"
const Option =(props)=>{
    function removeSelected() {
        return props.removeSelected(props.option)
    }
    return (
        <div className='option'>
            <p className='option__text'>{props.count}.  {props.option}</p>
            {props.option && <button className='button button--link' onClick={removeSelected}>remove</button>}
        </div>
    );
}
export default Option
