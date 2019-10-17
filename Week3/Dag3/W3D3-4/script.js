// data vanuit ander script tonen in de console.
getMovies().then(responseJSON => {
    console.log("Hier zijn de Genres:", responseJSON);
  });

  getMovieids().then(responseJSON => {
    console.log("Hier is Neverland", responseJSON);
  });

  getMovieLion().then(responseJSON => {
    console.log("Hier is The Lion King:", responseJSON);
  });