// Write your solution here!

let cats  = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(cat){
    cats.push(cat);
}

function destructivelyPrependCat(cat){
    cats.unshift(cat);
}

function destructivelyRemoveLastCat(cat){
    cats.pop(cat);
}

const destructivelyRemoveFirstCat=(cat)=>{cats.shift(cat)}

const appendCat=(cat)=>{
   const newCats = [...cats,cat]
   return newCats;
}

const prependCat=(cat)=>{
    const newCats = [cat,...cats]
    return newCats;
}

const removeLastCat=(cat)=>{
    const newCats = [...cats.slice(0,2)];
    return newCats;
}

const removeFirstCat=(cat)=>{
    const newCats = [...cats.slice(-2)];
    return newCats;
}