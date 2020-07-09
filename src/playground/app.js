class IndecisionApp extends React.Component {
    constructor(props){
        super(props)
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this)
        this.handlePickOptions=this.handlePickOptions.bind(this)
        this.handleAddOption=this.handleAddOption.bind(this)
        this.removeSelected=this.removeSelected.bind(this)
        this.state={
            options:props.options,
            taskToDo:''
        }
    }
    componentDidMount(){
        try {
            const options = JSON.parse(localStorage.getItem('options'))
            if (options) {
                this.setState(()=>({options:options}))
                console.log('fetching data !')
            }
            
        } catch (error) {
            console.log(error);
            
        }


 
    }
    componentDidUpdate(prevProps,prevState){

        if (prevState.options.length !== this.state.options.length) {
            const json =JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
            console.log('saving data !')
        } 
    }
    componentWillUnmount(){
        console.log('component will unmout')
    }
    handleDeleteOptions(){
        this.setState(()=> ({options:[]}) )
    }

    handlePickOptions(){
        this.setState(()=>{
            let randomNumber = Math.floor(Math.random()* this.state.options.length);
            let optionToDo=this.state.options[randomNumber]
            return {
                taskToDo:optionToDo
            }
        })
    }
    handleAddOption(option){
        if (!option) {
            return 'Enter valid value to add item '
        }else if (this.state.options.indexOf(option) > -1){
            return 'This option already exist '
        }
            this.setState((prevState)=>{
                return {
                    options:prevState.options.concat([option])
                }
            })
    }
    removeSelected(optionSelected){
        const newArraywithremove = this.state.options.filter((optt)=>{
            return optt !==optionSelected
        })
        this.setState(()=>{
            return {
                options:newArraywithremove
            }
        })
        
    }
    render(){
        const subTitle = 'Put Your Life In Hands Of a Computer';
        return (
            <div>
                <Header  subTitle={subTitle}/>
                <Action hasOptions={this.state.options.length > 0}  handlePickOptions={this.handlePickOptions} taskToDo={this.state.taskToDo}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} removeSelected={this.removeSelected}/>
                <AddOption handleAddOption ={this.handleAddOption}/>
            </div>
        );
    }
}
//====================================
IndecisionApp.defaultProps ={
    options:['hello','ahmed','mohamed']
}
///////////////////////////////////////////////////////////////////////
const Header = (props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            { props.subTitle && <h2> {props.subTitle} </h2>}
        </div>
    );
}
Header.defaultProps = {
    title: "Indecision",
};
////////////////////////////////////////////////////////////////////////
const Action = (props)=>{  
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePickOptions}>What Should I Do ?</button>
            {!!props.taskToDo && <p>{props.taskToDo}</p>}
        </div>
    );
}
//////////////////////////////////////////////////////////////////////
const Options = (props)=>{
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>please add new option to get started</p>}
           {props.options.map((opt)=>{
               return <Option key={opt} option={opt} removeSelected={props.removeSelected}/>
           })}
            
        </div>
    );
}
////////////////////////////////////////////////////////////////////////
const Option =(props)=>{
    function removeSelected() {
        return props.removeSelected(props.option)
    }
    return (
        <div>
            {props.option}
            {props.option && <button onClick={removeSelected}>remove</button>}
        </div>
    );
}
/////////////////////////////////////////////////////////////////////////



class AddOption extends React.Component {
    constructor(props){
        super(props)
        this.handleAddOption=this.handleAddOption.bind(this)
        this.state ={
            error:undefined
        }
    }
     handleAddOption(e){
        e.preventDefault();
        let option =  e.target.elements.option.value.trim();
        const error =this.props.handleAddOption(option);
        this.setState(()=>{
            return {
                error:error
            }
        })

        if(!error){
            e.target.elements.option.value='';
        }
        
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' />
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />,document.getElementById('app'))




// const User = (props)=>{
//     return (
//         <div>
//             <p>Name : {props.name} </p>
//             <p>Age  : {props.age}</p>
//         </div>
//     );
// }


// class Option extends React.Component {
//     render(){
       
        
//         return (
//             <div>
//                 {this.props.option}
//             </div>
//         );
//     }
// }



// class Options extends React.Component {

//     render(){
//         const options =this.props.options
        // return (
        //     <div>
        //         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        //        {options.map((opt)=>{
        //            return <Option key={opt} option={opt}/>
        //        })}
                
        //     </div>
        // );
//     }
// }

// class Header extends React.Component {
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2> {this.props.subTitle} </h2>
//             </div>
//         );
//     }
// }

// class Action extends React.Component {
//     render(){
        // return (
        //     <div>
        //         <button disabled={!this.props.hasOptions} onClick={this.props.handlePickOptions}>What Should I Do ?</button>
        //         {!!this.props.taskToDo && <p>{this.props.taskToDo}</p>}
        //     </div>
        // );
//     }
// }