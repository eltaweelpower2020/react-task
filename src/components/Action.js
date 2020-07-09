import React from 'react'
const Action = (props)=>{  
    return (
        <div>
            <button className='big-button' disabled={!props.hasOptions} onClick={props.handlePickOptions}>What Should I Do ?</button>
            {!!props.taskToDo && <p>{props.taskToDo}</p>}
        </div>
    );
}

export default Action