 class Person {
    constructor(name = 'anonymous',age=0){
        this.name=name;
        this.age=age
    }
    getGretting(){
        return `hello ya : ${this.name}`
    }
    getDescription(){
        return `hello ya : ${this.name} .your age is : ${this.age}`
    }
 }

 class Student extends Person {
    constructor(name,age,major){
        super(name,age)
        this.major=major
    }
    hasMajor(){
        return !!this.major
    }
    getDescription(){
        let description = super.getDescription()
        if (this.hasMajor()) {
            description +=  ` has major ${this.major}`
        }
        return description
        // return `hello ya : ${this.name} .your age is : ${this.age} and my major :${this.major}`
    }
 }

 class Traveler extends Person {
    constructor(name,age,homeLocation){
        super(name,age)
        this.homeLocation=homeLocation
    }
    getGretting(){
        let getGretting=super.getGretting()
        if(this.homeLocation){
            return getGretting + ` i am from : ${this.homeLocation}`
        }
        return getGretting
        
    }

 }

 const me = new Traveler ('mahmoud eltaweel',33,'egypt');
 console.log(me.getGretting());
 const other = new Traveler ('ahmed',50);
 console.log(other.getGretting());
 