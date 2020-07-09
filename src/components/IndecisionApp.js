import React from "react"

import AddOption from "./AddOption"
import Options from "./Options"
import Header from "./Header"
import Action from "./Action"
import OptionModal from "./OptionModal"


export default class IndecisionApp extends React.Component {
    state={
        options:[],
        selectedOption:undefined

    }
    componentDidMount=()=>{
        try {
            const options = JSON.parse(localStorage.getItem('options'))
            if (options) {
                this.setState(()=>({options:options}))
                
            }
            
        } catch (error) {
            console.log(error);
            
        }


 
    }
    componentDidUpdate= (prevProps,prevState)=>{

        if (prevState.options.length !== this.state.options.length) {
            const json =JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
            
        } 
    }
    componentWillUnmount= ()=>{
        console.log('component will unmout')
    }
    handleClearSelectedOption = ()=>{
        this.setState(()=> ({selectedOption:undefined}))
    }
    handleDeleteOptions= ()=>{
        this.setState(()=> ({options:[]}) )
    }

    handlePickOptions= () => {
        let randomNumber = Math.floor(Math.random()* this.state.options.length);
        let option=this.state.options[randomNumber]
        this.setState(()=>{
            return {
                selectedOption:option
            }
        })
    }
    handleAddOption =(option)=>{
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
    removeSelected= (optionSelected)=> {
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
            <div className='background-color'>
                <Header  subTitle={subTitle}/>
                <div className='container'>
                    <Action hasOptions={this.state.options.length > 0}  handlePickOptions={this.handlePickOptions}/>
                    <div className='widget'>
                        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} removeSelected={this.removeSelected}/>
                        <AddOption handleAddOption ={this.handleAddOption}/>
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption}/>
            </div>
        );
    }
}
//====================================
IndecisionApp.defaultProps ={
    options:['hello','ahmed','mohamed']
}