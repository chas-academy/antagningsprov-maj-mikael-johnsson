

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
    const persons = [
        {name: "johan", age: 20},
        {name: "lina", age: 25},
        {name: "jasmine", age: 29},
        {name: "erik", age: 45},
        {name: "göran", age: 55}
    ]

    function over30(persons){
        for(let person of persons){
            if(person.age > 30){
                console.log(person.name)
            }
        }  
    };
    
    over30(persons);

}

module.exports = { uppg8 };
uppg8();