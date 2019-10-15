const items = [
    
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"},

]
    
    // find {name: "Spiderman", alter_ego: "Peter Parker"}

    const findItems = items.find ((item) => {
       return item.name === "Spiderman"
    })

    console.log(findItems);