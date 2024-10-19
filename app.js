const url ="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
let button = document.querySelector("#button")
let Joke = document.querySelector("#joke");


let getjoke = async ()=>{
    let response = await fetch(url);
    let data = await response.json()
    // console.log(data.joke)  
    Joke.textContent = data.joke
    console.log(joke)

}

let time = button.addEventListener("click",getjoke);
// console.log(res)
