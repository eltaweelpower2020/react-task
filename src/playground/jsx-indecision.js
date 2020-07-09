const app = {
    title:"Indecision App",
    subtitle:'Put your life in the hand of a computer ',
    options:['one','two','three','four','five','six']
}
const onFormSubmit=(e)=>{
    e.preventDefault();
    let option =  e.target.elements.option.value;
    if (option) {
        app.options.push(option)
        e.target.elements.option.value="";
        render()
    }
}
const appRoot=document.getElementById('app')
const onRemoveAll = ()=>{
    app.options=[]
    render()
}

const onMakeDecision=()=>{
     let randomNumber = Math.floor(Math.random() * app.options.length); 
    console.log(app.options[randomNumber]);
    render()
}
const render = ()=>{
    const template =( <div>
    <h1>{app.title} </h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length>0 ? 'Here is your option' : 'No options'}</p>
    <button disabled={app.options==0} onClick={onMakeDecision}>What should i do ?</button>
    <br></br>
    <br></br>
    {/* {randomNumber && ('option is :' + app.options[randomNumber])} */}
    <br></br>
    <br></br>
    <br></br>
    <button onClick={onRemoveAll}>Remove all</button>
    <ol>
        {app.options.map((option) => <li key={option}>{option}</li>)}
    </ol>
    <form onSubmit={onFormSubmit}>
        <input type='text ' name='option'></input>
        <button >Add Option</button>
    </form>
</div>) ;
ReactDOM.render(template,appRoot)
}
render()

















// const user= {
//     userName:'Mahmoud Ahmed Eltaweel',
//     age:33,
//     location:'Egypt Alexandria shakous'
// }
//  const getLocation =function  (location) {
//     if (location) {
//         return <p>Location: {location}</p>
//     } 
// }
// const templateTwo = <div>
//     <h1>{user.userName ? user.userName : 'anonymous'}</h1>
//     {(user.age && user.age >18) && <p>Age:{user.age}</p>}
//     {getLocation(user.location)}
// </div>