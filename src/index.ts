let var1 = 'string'

const var2 = 1234

let var3 // let var3: any


// var1 = 1234 // error
var3 = 123
var3 = 'string'


// number
// string
// boolean

// object
// array

// function

// Symbol, Map, Set .... >ES6


type Coordinates = {
    x: number,
    y: number
}

let coords: Coordinates
coords = {x: 1, y: 1}
// coords = {x: 1}
coords.x = 2
// coords.z = 1 // error

let coods1: any = {}
coods1.x = 1
coods1.z = 1

type Position = {
    x: number,
    y: number,
    z?: number
}

let coords2: Position = {x: 1, y: 2}
coords2.z = 10

type Coordinates3D = Coordinates & {z: number}
let coords4: Coordinates3D = {x: 1, y: 2, z: 3}

let arCoords: Coordinates[] // Array<Coordinates>

type Goods<Type> = {
    type: Type,
    id: number,
    title?: string
}

let goods: Goods<string> = {type: 'test', id: 1}

type ext = 'ts' | 'js' | 'cpp' | undefined

let extVar: ext
extVar = 'ts'
extVar = 'js'
extVar = undefined

interface Animal {
    // age: number
    eat: (obj: any) => boolean
    walk?: (c: number) => boolean
}

interface Cat extends Animal {

}

class CAnimal implements Animal {
    protected _age: number = 0


    // get age(){
    //    return this._age 
    // }

    // set age(v: number) {
    //     if(v < 0){
    //         this._age = 0
    //     }
    //     else {
    //         this._age = v
    //     }
    // }

    constructor(age: number) {
        this._age = age
    }

    eat(obj: any) {
        return false
    }
}

class CCat extends CAnimal {

    constructor(age: number){
        super(age)
        // console.log(this.age)
    }
}

const animal = new CAnimal(10)
// console.log(animal.age) // get age()

// animal.age = 100 // set get(v)

class CField {
    private static countPlant: number = 0

    static addPlant(){
        CField.countPlant++
    }

    static getCountPlant(){
        return CField.countPlant
    }
}

class Utils {

    static round(){}

}

CField.addPlant()
console.log(CField.getCountPlant())

