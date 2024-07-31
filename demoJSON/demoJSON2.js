// JavaScript Object Notation = data-initerchange format
// Used for exchanging data between a server and a web application
// JSON files usually is a object-{key:value} OR array-[value1, value2, value3] OR array of object-[{},{},{}]

//  JSON.stringify()  =  converts a JS object to a JSON string
//  JSON.parse()      =  converts a JSON string to a JS object


fetch("names.json")
.then(response => response.json())
.then(value => console.log(value))

fetch("people.json")
.then(response => response.json())
.then(values => values.forEach(value =>console.log(value.isEmployed)))
