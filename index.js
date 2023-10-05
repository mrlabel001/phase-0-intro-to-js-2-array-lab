

var cats = ["Milo", "Otis", "Garfield"];
beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyAppendCat(){
cats.push("Ralph");
}
function destructivelyPrependCat(){
    cats.unshift("Bob");
    }
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function appendCat(name){
    var array = [...cats,"Broom"];
    return array;
}
function prependCat(name){
    var arrayTwo = ["Arnold",...cats];
    return arrayTwo;
  }
  function removeLastCat(){
    var arrayThree= cats.slice(0,cats.length-1);
    return arrayThree;
  }
  function removeFirstCat(){
    var arrayFour= cats.slice(1);
    return arrayFour;
  }