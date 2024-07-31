// JavaScript Object Notation = data-initerchange format
// Used for exchanging data between a server and a web application
// JSON files usually is a object-{key:value} OR array-[value1, value2, value3] OR array of object-[{},{},{}]

//  JSON.stringify()  =  converts a JS object to a JSON string
//  JSON.parse()      =  converts a JSON string to a JS object

const jsonNames = `["Spongebob","Patrick","Squidward","Sandy"]`;
const jsonPerson = `{"name": "Spongebob","age": 24,"isEmployed": true,"hobbies": ["Jellyfishing","Karate","Cooking"]}`;
const jsonPeople = `[{"name": "Spongebob","age": 24,"isEmployed": true},
                    {"name": "Patrick","age": 28,"isEmployed": false},
                    {"name": "Squidward","age": 50,"isEmployed": true},
                    {"name": "Sandy","age": 27,"isEmployed": false}]`;
const parseData = JSON.parse(jsonNames);
const jsonString = JSON.stringify(jsonPeople);

console.log(jsonNames);


