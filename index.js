let celcius = 2;
let fahrenheit = celcius * 1.8 + 32;

console.log(fahrenheit);

let cash = 50;
let price = 40;
isStoreOpen = true;

let str = cash >= price && isStoreOpen ? ('print receipt') : ('do not give receipt')
console.log(str)


for (let i = 1; i <= 20; ++i) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} --> Frontend Simplified`)
    }

    else if (i % 3 === 0) {
        console.log(` ${i} --> Frontend`)
    }

    else if (i % 5 === 0) {
        console.log(` ${i} --> Simplified`)
    }

    else {
        console.log(` ${i} --> ${i}`)
    }

}

const stre = "Frontend Simplified";

for (i = 0; i < stre.length; ++i) {
    console.log(stre[i])
}


function celciusToFahrenheit(celcius) {
    let fahrenheit = celcius * 1.8 + 32
    return fahrenheit
}

console.log(celciusToFahrenheit(2))

let grades = ['A+', 'A', 'FAIL',]

let goodGrades = grades.filter((element) => element !== 'FAIL')

console.log(goodGrades)

let gudGrades = []

for (let i = 0; i < grades.length; ++i) {
    if (grades[i] !== 'FAIL') {
        gudGrades.push(grades[i])
    }
    console.log(gudGrades)
}

for (let i = 0; i < grades.length; ++i) {
    if (grades[i] !== grades[grades.length - 1]) {
        console.log(grades[i])
    }
}

let dollars = [1, 5, 10, 3];

let cents = dollars.map(element => element * 100)
console.log(cents)

let dollarss = [0, 10, 20]
let centss = []

for (let i = 0; i < dollarss.length; ++i) {
    centss.push(dollarss[i] * 100)
    console.log(centss)
}


let users = [
    {
        username: 'Jaydon Paul',
        email: 'jaydonpaul2002@gmail.com',
        password: 'chicken',
        subscriptionStatus: 'VIP',
        discordID: 'jaydonpaul',
        lessonsCompleted: [1, 2, 3, 4, 5]
    },
    {
        username: 'Cran Corn',
        email: 'crancorn2002@gmail.com',
        password: 'rabbit',
        subscriptionStatus: 'VIP+',
        discordID: 'crancorn',
        lessonsCompleted: [1, 2, 3,]
    },
    {
        username: 'Ice Cream',
        email: 'icecream2002@gmail.com',
        password: 'ferris',
        subscriptionStatus: 'no subscription',
        discordID: 'icecream',
        lessonsCompleted: [1, 2, 3, 4, 5, 6, 7]
    },
]

function register(user) {
    users.push(user);
}

register( {
username: 'Jaydon Paul',
email: 'jaydonpaul2002@gmail.com',
password: 'chicken',
subscriptionStatus: 'VIP',
discordID: 'jaydonpaul3',
lessonsCompleted: [1, 2, 3, 4, 5]})

console.log(users)

console.log(document.querySelector('#name'))

function clickRed(){
    document.querySelector("#name").style.color = "red";
}

