const player = {
    name: "janghyun",
    age: 84,
};

player.age = 41;
console.log(player, console)
player.con = "tent";
console.log(player, console)

const calculator = {

    plus: function(a, b) {
        console.log(a + b)
    },

    minus: function(a, b) {
        console.log(a - b)
    },

    divide: function(a, b) {
        console.log(a / b)
    },

    times: function(a, b) {
        console.log(a * b)
    },

    power: function(a, b) {
        console.log(a **b)
    }

};

calculator.plus (1, 2)
calculator.minus (1, 2)
calculator.divide (1, 2)
calculator.times (1, 2)
calculator.power (1, 2)

const age = 84;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAg);










const title = document.getElementById("title");

console.log(title);
console.dir(title);

title.innerText = "test";

console.log(title.id);
console.log(title.className);


function test() {
    if(a == 4){
        console.log("hi")
    }else{
        console.log("bye")
    }
};

let a = 4;

test(a);
test(a = 6);