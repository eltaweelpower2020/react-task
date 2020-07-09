class VisabilityToggle extends React.Component{
    togleFun(){
        this.setState((prevState)=>{
            return {visibiltyToggle : ! prevState.visibiltyToggle}
        })
    }
    constructor(props){
        super(props);
        this.togleFun=this.togleFun.bind(this)
        this.state = {
            visibiltyToggle:false
        }
    }
    render(){
        return (
            <div>
                <h1>visibilty toggle</h1>
                <button  onClick={this.togleFun}>{!this.state.visibiltyToggle ? 'show details' : 'hide details'}</button>
                {this.state.visibiltyToggle && <p>Hey this is some details ya man</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisabilityToggle/>,document.getElementById('app'))

// let visibiltyToggle = false;
// const togleFun = ()=>{
//     visibiltyToggle =! visibiltyToggle
//     render()
// }
// const appRoot = document.getElementById('app')
// const render = ()=>{
//     const template = (
//         <div>
//             <h1>visibilty toggle</h1>
//             <button id='buttonyaman' onClick ={togleFun}>{ !visibiltyToggle ? 'show details' : 'hide details'}</button>
//             {visibiltyToggle && <p>Hey this is some details ya man</p>}
//         </div>
//     );
//     ReactDOM.render(template,appRoot)
// }
// render()