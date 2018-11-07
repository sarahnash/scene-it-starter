function renderMovies () {
  document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault()
    var searchString = document.getElementById('search-bar').value
    var urlEncodedSearchString = encodeURIComponent(searchString)
    axios.get('http://www.omdbapi.com/?apikey=3430a78&s=' + urlEncodedSearchString).then(function (response) {
      console.log(response.data.Search)
      var movieHTML = response.data.Search.map(makeMovie).join('')
      $(movieHTML).appendTo('#resultsContainer')
    })
  })
}

function makeMovie (currentMovie) {
  return `<div class="card" style="width: 20rem; background: darkgray; margin: 10px;">
          <img class="card-img-top" src="${currentMovie.Poster}">
          <div class="card-body d-flex" style="flex-direction: column; align-items: center;">
            <h5 class="card-title d-flex">${currentMovie.Title}</h5>
            <h5 class="card-text d-flex" style="margin-bottom: .75rem;">${currentMovie.Year}</h5>
            <a href="#" class="btn btn-primary d-flex" onclick=saveToWatchlist('${currentMovie.imdbID}')>Add!</a>
          </div>
          </div>`
}

function saveToWatchlist (imdbID) {
  var movie = movieData.find(function (currentMovie) {
    return currentMovie.imdbID === imdbID
  })
  var watchlistJSON = localStorage.getItem('watchlist')
  console.log(watchlistJSON)
  var watchlist = JSON.parse(watchlistJSON)
  console.log(watchlist)
  if (watchlist === null) {
    watchlist = []
    watchlist.push(movie)
    console.log(watchlist)
    watchlistJSON = JSON.stringify(watchlist)
    console.log(watchlistJSON)
    localStorage.setItem('watchlist', watchlistJSON)
  } else {
    watchlist.push(movie)
    watchlistJSON = JSON.stringify(watchlist)
    localStorage.setItem('watchlist', watchlistJSON)
  }
}

function init () {
  renderMovies()
}

document.addEventListener('DOMContentLoaded', init)