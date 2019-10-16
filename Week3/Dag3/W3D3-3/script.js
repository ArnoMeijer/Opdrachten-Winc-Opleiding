// data vanuit ander script tonen in de console.
getMovies().then(responseJSON => {
    console.log("hier is je data om iets mee te gaan doen:", responseJSON);
  });