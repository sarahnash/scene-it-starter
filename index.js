var content = document.getElementById('resultsContainer')

content.innerHTML = renderMovies()

function renderMovies (movieArray) {
  console.log(movieArray)
  var movieHTML = movieArray.map(makeMovie).join('')
  return movieHTML
}

function makeMovie (currentMovie) {
  return `<div class="card" style="width: 20rem; background: darkgray; margin: 10px;">
          <img class="card-img-top" src="${currentMovie.Poster}">
          <div class="card-body d-flex" style="flex-direction: column; align-items: center;">
            <h5 class="card-title d-flex">${currentMovie.Title}</h5>
            <h5 class="card-text d-flex" style="margin-bottom: .75rem;">${currentMovie.Year}</h5>
            <a href="#" class="btn btn-primary d-flex">Add!</a>
          </div>
          </div>`
}

function init () {
  console.log('this is it')
  renderMovies()
  const movieArray = movieData
}

document.addEventListener('DOMContentLoaded', init)
