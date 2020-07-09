//arrow function 2 
// const user = {
//     name:'mahmoud ahmed eltaweel',
//     cities:['cairo','alexandria','portsaid'],
//     getDetails(){
//         return this.cities.map((city)=> this.name + ' has lived in '+city
//         )
//     }
// }
// console.log(user.getDetails());

const multiplyer = {
    numbers:[2,4,6,8,10],
    multiplayBy:10,
    multiplay(){
        return this.numbers.map((num)=> num* this.multiplayBy)
    }
}
console.log(multiplyer.multiplay())




















// const getFirstName = fullName=> fullName.split(' ')[0]
// console.log(getFirstName('mahmoud ahmed'));



//  const square = function (x) {
//      return console.log(x*x)
//  }
//  square(30);
//  const squareOne= (x)=>{
//     return console.log(x*x)
//  }
//  squareOne(40);
 