const { version } = require("react");

const add = (a, b) => {
    return a + b;
};
console.log(add(5, 15));

const addShort = (a, b) => a + b;
console.log(addShort(5, 15));

const greet = () => {
    console.log("Hello");
};
greet();