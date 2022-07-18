function showRating(rating){
    let ratings = "";
    for(i=0; i< Math.floor(rating); ++i){
      ratings += "*"

      if( i !== Math.floor(rating) - 1){ 
        ratings += " "
    }
    }
    if( !Number.isInteger(rating)){
        ratings += ' .';
    }

    return ratings;
}

console.log(showRating(4))


function sortLowToHigh(numbers){
    return numbers.sort((a, b) => a.price - b.price)}

console.log(sortLowToHigh(
    [{
       id: 5, price: 50
     },
     {
        id: 2, price: 30
     },
     {
        id: 3, price: 70
     },
]))



async function postsByUser(userId){
    const promise = await fetch ('https://jsonplaceholder.typicode.com/posts');

    const result = await promise.json()

    const post = result.filter(element => element.userId === userId)
    
    console.log(post)
}


postsByUser(4)

async function toDos(id){

    const promise = await fetch('https://jsonplaceholder.typicode.com/toDos');

    const result = await promise.json()

    const post  = result.filter(element =>  !element.completed).slice(0, 6)
    

    console.log(post)
}

toDos(6)