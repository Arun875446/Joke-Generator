
const jokeEl = document.getElementById('joke')

const jokeBtn = document.getElementById('joke-btn')


jokeBtn.addEventListener('click', generateJoke)


function generateJoke(){

    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random')

    xhr.onreadystatechange = function(){

        if(this.readyState === 4 && this.status === 200){

            const data = JSON.parse(this.responseText).value

            jokeEl.innerHTML = data

        } else {

            jokeEl.innerHTML = 'Something Went Wrong..(Not Funny)'
        }
    }

    xhr.send()
}


document.addEventListener('DOMContentLoaded', generateJoke)