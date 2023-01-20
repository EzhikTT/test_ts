var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var var1 = 'string';
var var2 = 1234;
var var3; // let var3: any
// var1 = 1234 // error
var3 = 123;
var3 = 'string';
var coords;
coords = { x: 1, y: 1 };
// coords = {x: 1}
coords.x = 2;
// coords.z = 1 // error
var coods1 = {};
coods1.x = 1;
coods1.z = 1;
var coords2 = { x: 1, y: 2 };
coords2.z = 10;
var coords4 = { x: 1, y: 2, z: 3 };
var arCoords; // Array<Coordinates>
var goods = { type: 'test', id: 1 };
var extVar;
extVar = 'ts';
extVar = 'js';
extVar = undefined;
var CAnimal = /** @class */ (function () {
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
    function CAnimal(age) {
        this._age = 0;
        this._age = age;
    }
    CAnimal.prototype.eat = function (obj) {
        return false;
    };
    return CAnimal;
}());
var CCat = /** @class */ (function (_super) {
    __extends(CCat, _super);
    function CCat(age) {
        return _super.call(this, age) || this;
        // console.log(this.age)
    }
    return CCat;
}(CAnimal));
var animal = new CAnimal(10);
// console.log(animal.age) // get age()
// animal.age = 100 // set get(v)
var CField = /** @class */ (function () {
    function CField() {
    }
    CField.addPlant = function () {
        CField.countPlant++;
    };
    CField.getCountPlant = function () {
        return CField.countPlant;
    };
    CField.countPlant = 0;
    return CField;
}());
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.round = function () { };
    return Utils;
}());
CField.addPlant();
console.log(CField.getCountPlant());
