let jokeContainer = document.getElementById('joke');
let btn = document.getElementById('btn');
var url = "https://api.api-ninjas.com/v1/jokes?limit=1";

var joke_data;

function genrateJoke(){
    jokeContainer.classList.remove('fade');
    
    fetch(url,{
        method: 'GET',
        headers: { 'X-Api-Key': 'M7zah9GF+UKJpTmOwJClAA==7tDlEWbASpAXvAad'},
    }).then(
        response => response.json()
        )
        .then(
            item => {
                jokeContainer.textContent = item[0].joke
                jokeContainer.classList.add('fade');
        });
}

btn.addEventListener('click',genrateJoke);
genrateJoke();