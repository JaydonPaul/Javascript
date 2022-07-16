function addition(num1, num2){
    return num1 + num2
}

console.log(addition(1, 2))

function hrsToSeconds(hrs, seconds){
    return seconds= hrs*60*60
}

console.log(hrsToSeconds(5))

function areaTriangle(base, height){
    return (base*height)/2
}
console.log(areaTriangle(10, 2))

let str= "cake"
function addstring(str){
    return str + ' Frontend'
}
console.log(addstring(str))

function sumGreaterThan100(num1, num2){
    return (+num1) + (+num2) >= 100
}

console.log(sumGreaterThan100(50, 50))

function lessThanEqualTo(number){
    return number<=0
}

console.log(lessThanEqualTo(-2))

function trueIfFalse(bool){
    return !bool
       
}

console.log(trueIfFalse(true))

function isNotZero(number){
    return number !== 0
}

console.log(isNotZero(-2))

function calcRemainder(num1, num2){
    return num1 % num2
}

console.log(calcRemainder(4, 4))

function isOdd(number){
    return number % 2 !==0
}

console.log(isOdd(10))

function booleanInteger(number){
    return number % 2 === 0 ? 1 :-1
}

console.log(booleanInteger(2))

function loggedInAndSubscribed(LoggedIn, Subscribed){
    return LoggedIn=== "LoggedIn" || Subscribed ==='Subscribed' ? true: false
}

console.log(loggedInAndSubscribed('LoggedIn', 'Subscribed'))


function filterOutFalsy(val1, val2){
    return (!val1) ? val1 : val2
}

console.log(filterOutFalsy(1, 'cream'))

function arrLength(arr){
    return arr.length 
}

console.log(arrLength([1, 2, 3, 4, 5, 6]))

function arrSum(arr){
    let sum = 0;
   for(i=0; i<arr.length; ++i){         
        console.log(arr[i])
        sum= sum + arr[i]
   }
   return sum;
} 

console.log(arrSum([1, 3, 2, 2, 2]))

function progrSum(num){
    let sum= 0;
    for( i=1; i<=num; ++i){
        console.log(i)
        sum = sum + i
    }
    return sum;
}

console.log(progrSum(6))

function calcTime(seconds){
    let TimerMinutes= Math.floor(seconds/60);
    let TimerSeconds= seconds % 60

    if (TimerMinutes.toString().length ===1){
        TimerMinutes = '0' + TimerMinutes
    }
    return TimerMinutes +':'+ TimerSeconds
}

console.log(calcTime(520))

function getMax(arr){
    let max= arr[0]
    for (let i=1; i < arr.length; ++i){
        console.log(arr[i]);
        if (arr[i] > max){
            max= arr[i]
        }
    }
    return max
}

console.log(getMax([1, 200, 300, -2, 900]))

function reverseString(str){
    let reversedString = '';
    for( i=0; i<str.length; ++i){
        reversedString= str[i] + reversedString
    }
    return reversedString
}

console.log(reverseString('abc'))

function removeApples(arr){
    let remove= [];
    for(i=0; i<arr.length; ++i){
        if( arr[i] !== 'Apple'){
            remove.push(arr[i]);
        }
    }
    return remove;

}

console.log(removeApples(['Apple', 'Banana', 'Orange', 'Tomato']))

function filterFalsy(arr){
    return arr.filter(elem => !!elem === true)
}

console.log(filterFalsy([[], 0, 'Banana', 'Orange', 'Tomato']))


function conToBool(arr){
       return arr.map(elem => !!elem)
}

console.log(conToBool([[], 0, 'Banana', '', null]))
