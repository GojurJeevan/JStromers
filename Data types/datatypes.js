/* Variables
1.let
2.const
3.var

*/
let userName;  /*Camel Casing */




/*
Primitive Datatypes:
Stores single value and are immutable
1.number:Represents both integer and float
2.string:Sequence of characters,enclosed with("",'',``)
3.Boolean:true (or) false
4.null:represents value absence
5.undefined:represents value is not assigned
6.symbol:represents unique values


Non-primitive datatypes:
stores multiple values and mutable
1.Array:collection of values with heterogenous values
2.Object:represents key value pairs
3.Array of Objects:declaring objects inside array
*/ 


let array = [
    {
        name:"jeevan",
        age:22,
        fee:30000
    },
    {
        name:"Harsha",
        age:22,
        fee:35000
    },
    {
        name:"lucky",
        age:19,
        fee:20000
    }
]

console.log(array[0].fee);