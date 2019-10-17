async function getPokemon() {
        const apiUrl = `https://pokeapi.co/api/v2/item-fling-effect/7/`;  
        const result = await fetch(apiUrl, {
          method: "GET"
        })
          .then(response => response.json())
          .catch(error => console.log(error))
      
        return await result;
      }
