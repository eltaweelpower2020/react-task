class Counter extends React.Component{
    constructor(props){
        super(props);
        this.addOne=this.addOne.bind(this)
        this.minusOne=this.minusOne.bind(this)
        this.reset=this.reset.bind(this)
        this.state= {
            count:0
        };
    }

    componentDidMount(){
        this.setState(()=>{
            return {count : parseInt(localStorage.getItem('count')) }
        })
    }
    componentDidUpdate(prevProps,prevState){
        if (prevState.count !== this.state.count) {
            const count = this.state.count
            localStorage.setItem('count',count)
            console.log('1111111');
        }
    }

    addOne () { 
        if(this.state.count == NaN){
            this.setState(()=>({count:500}))
       }
       this.setState((prevState)=>{
           return {
               count:prevState.count + 1
           };
       });   
    };
    minusOne(){
        this.setState((prevState)=>{
            return {
                count:prevState.count - 1
            };
        });
    };
    reset(){
        this.setState(()=>{
            return {
                count:0
            };
        }); 
    };
    render(){
       
        return (
            <div>
                <h1>count : {this.state.count }</h1>
                <button onClick ={this.addOne}>+1</button>
                <button onClick ={this.minusOne}>-1</button>
                <button onClick ={this.reset}>reset</button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     count:0
// }
ReactDOM.render(<Counter count={10}/>,document.getElementById('app'))



























// const addOne=()=> {
//     count++
//     renderCounterApp()
// }
// const minusOne=()=> {
//     count--
//     renderCounterApp()
// }
// const reset=()=> {
//     count=0
//     renderCounterApp()
// }

// let count = 0 ;
// const appRoot=document.getElementById('app')
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>count : {count}</h1>
//             <button onClick ={addOne}>+1</button>
//             <button onClick ={minusOne}>-1</button>
//             <button onClick ={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo,appRoot)
// };
// renderCounterApp()
