function returnForms() {
    const createMovie = document.querySelector("#createMovie");
    const movieForm = document.querySelector("#movieForm");
    const moviesHolder = document.querySelector("#moviesHolder");

    return { createMovie, movieForm, moviesHolder };
}

function styleDisplayNone(element) {
    element.style.display = "none"
}

function styleDisplayBlock(element) {
    element.style.display = "block"
}


function styleDisplayFlex(element) {
    element.style.display = "flex";
}

function resetInputValue(listOfinputs){
    for (let el of listOfinputs){
        el.value = '';
    }
}

function AddMovie() {
    const { createMovie, movieForm, moviesHolder } = returnForms();
    const dropDownMenu = document.querySelector('.yearFilter');
    const sortHolder = document.querySelector('.sortholder');

    const el1 = document.querySelector("#name");
    const el2 = document.querySelector('#year');
    const el3 = document.querySelector('#url');

    resetInputValue([el1, el2, el3]);

    styleDisplayNone(movieForm);
    styleDisplayBlock(createMovie);
    styleDisplayNone(moviesHolder);
    styleDisplayNone(dropDownMenu);
    styleDisplayNone(sortHolder);
}

function createNewMovie(event) {
    event.preventDefault();

    const { createMovie, movieForm, moviesHolder } = returnForms();
    const movieName = document.querySelector("#name").value;
    const movieYear = document.querySelector('#year').value;
    const movieImg = document.querySelector('#url').value;
    const dropDownMenuMain = document.querySelector('.yearFilter');
    const dropDownMenu = document.querySelector('#yearFilter');
    const sortHolder = document.querySelector('.sortholder');

    const boxElement = document.createElement('div');
    boxElement.className = 'movieBox';

    const nameOfMovie = document.createElement('h2');
    nameOfMovie.textContent = movieName;

    const yearOfMovie = document.createElement('p');
    yearOfMovie.textContent = movieYear;

    const image = document.createElement('img');
    image.src = movieImg;

    const yearOption = document.createElement('option');
    yearOption.value = yearOfMovie.textContent;
    yearOption.textContent = yearOfMovie.textContent;

    const allYearsOptions = document.querySelectorAll('option');
    const yearsList = Array.from(allYearsOptions).map(option => option.value);


    if (!yearsList.includes(yearOption.value)) {
        dropDownMenu.appendChild(yearOption);
    }

    boxElement.appendChild(nameOfMovie);
    boxElement.appendChild(yearOfMovie);
    boxElement.appendChild(image);
    
    moviesHolder.appendChild(boxElement);

    styleDisplayNone(createMovie)
    styleDisplayBlock(movieForm)
    styleDisplayFlex(moviesHolder);
    styleDisplayFlex(dropDownMenuMain);
    styleDisplayFlex(sortHolder);
}

function SortByDate(event) {
    event.preventDefault();
    const container = document.querySelector(".container");
    const movies = Array.from(document.querySelectorAll(".movieBox"));

    movies.sort((a, b) => {
        const yearA = parseInt(a.querySelector("p").textContent); 
        const yearB = parseInt(b.querySelector("p").textContent);
        return yearA - yearB;
    });

    container.innerHTML = "";
    movies.forEach(movie => container.appendChild(movie));
}


function filterByYear(event) {
    event.preventDefault();
    const selectedYear = document.getElementById("yearFilter").value;
    const movies = document.querySelectorAll(".movieBox");

    movies.forEach(movie => {
        const movieYear = movie.querySelector("p").textContent;
        
        if (selectedYear === "all" || movieYear === selectedYear) {
            movie.style.display = "block";
        } else {
            movie.style.display = "none";
        }
    });
};