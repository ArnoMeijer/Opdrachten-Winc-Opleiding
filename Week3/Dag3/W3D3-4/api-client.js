// API_KEY (altijd met hoofdletters)
const API_KEY = "c7bcd715070f2fd3d4488a3d61ee485a"

//Functie schrijven met variabelenaam. Async, omdat je wellicht moet wachten op externe server. JS kan wel verder
async function getMovies() {
// variabele met URL en API_KEY
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
// variabele met daarin de opdracht om data op te halen, fetchen en de GET methode is alleen ophalen    
    const result = await fetch(apiUrl, {
      method: "GET"
    })
          // De promisse is de data ophalen. Daarna (.then) het bestand omzetten naar json format
      .then(response => response.json())
          // De promisse kan ook fout gaan, hiermee log je de error in de console
      .catch(error => console.log(error));
  
      //await erbij, zodat JS niet wacht op de result
    return await result;
  }

// daarna de data beschikbaar maken in JS in andere file (script.js)

// Opdracht 4
// Maak een lijstje van alle beschikbare genres en hun corresponderende IDs van TheMovieDB ✅

async function getMovieids(){
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=Neverland`;
  const result = await fetch(apiUrl, {
    method: "GET"
  })
  .then(response => response.json())
  .catch(error => console.log(error));
  return await result;
}

async function getMovieLion(){
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=The+Lion+King`;
  const result = await fetch(apiUrl, {
    method: "GET"
  })
  .then(response => response.json())
  .catch(error => console.log(error));
  return await result;
}
