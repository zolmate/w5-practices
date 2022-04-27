const firstPerson = {
    name: "Peter",
    sex: "male",
}

const secondPerson = {
    name: "Sarah",
    sex: "female",
}

function detectSex(person) { 
    console.log(person);
    if (person.sex === "female") { //fontos, hogy a person paraméterhez rendeltük a sex-et
        return "This person is a female"
    } else if(person.sex === "male") {
        return "This person is a male"
    }
    else {
        return "This person's sex isn't female nor male"
    }
}

console.log( detectSex(firstPerson) );

console.log( detectSex(secondPerson) );

console.log( detectSex({
    name: "Penelope",
    sex: "female"
}) );

console.log( detectSex({
    name: "Penelope",
    sex: "female2" //ez viszont nem pontos, hanem helytelen, hiszen male-t ad ki (ha nincs az else if) - else if-fel undefined, mert egyik return-ben sem jelentettük ki, mi történjen ha valami eltérő értéket adunk meg - ezért kell az if + else if + else
}) );