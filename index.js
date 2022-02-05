// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    const newCats = [...cats, "Broom"];
    return newCats;
}

function prependCat() {
    const newNewCats = ["Arnold", ...cats];
    return newNewCats;
}

function removeLastCat() {
    const bye = cats.slice(0, cats.length - 1);
    return bye;
}

function removeFirstCat() {
    const byeOne = cats.slice(1);
    return byeOne;
}