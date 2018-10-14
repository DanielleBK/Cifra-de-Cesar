const values = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
let key = +document.getElementById("key").innerHTML;

function prev() {
  if (key > 1) {
    key--;
    document.getElementById("key").innerHTML = key;
  }
}

function next() {
  if (key < 25) {
    key++;
    document.getElementById("key").innerHTML = key;
  }
}

function cipher() {
  let input = document.getElementById("input").value.toUpperCase();
  let result = "";

  for (let i = 0; i < input.length; i++) { 

    let abcPosition = input.charCodeAt(i) - 64; 
    let displacement = (abcPosition + key) % 26; 
    displacement = displacement == 0 ? 26 : displacement; 
    result += values[displacement - 1]; 
  }

  document.getElementById("output").innerHTML = result;
}

function decripher() {
  let input = document.getElementById("input2").value.toUpperCase();
  let result = "";

  for (let i = 0; i < input.length; i++) {

    let abcPosition = input.charCodeAt(i) + 60; 
    let displacement = (abcPosition - key) % 26;
    displacement = displacement == 0 ? 26 : displacement; 
    result += values[displacement - 1]; 
  }

  document.getElementById("output").innerHTML = result;
}
