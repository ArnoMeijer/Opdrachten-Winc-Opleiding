 function button(){
    getPokemon().then (responseJSON => {
        const data = responseJSON
        console.log(responseJSON)
        document.getElementById("show").innerHTML =
                "<pre>" + JSON.stringify(data.name, null, " ") + "</pre>"
        })
 }
 
 function button2(){
    getPokemon().then (responseJSON => {
        const data = responseJSON
        document.getElementById("show2").innerHTML =
                "<pre>" + JSON.stringify(data.url, null, " ") + "</pre>"
        })
 }
