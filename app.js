
  var values = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
  var key = +document.getElementById('key').innerHTML;

    function prev() {
        if(key > 1) {
          key--;
          document.getElementById('key').innerHTML = key;
       }
       }
       function next() {
           if(key < 25) {
             key++;
             document.getElementById('key').innerHTML = key;
          }
          }
       function cipher() {
           var input = document.getElementById('input').value.toLocaleUpperCase();
           var result = '';
               for(var i = 0; i<input.length; i++){ //Passa por cada caracter do input
                  var abcPosition = input.charCodeAt(i)-64; //Identifica qual letra é do alfabeto
                  var displacement = (abcPosition + key) % 26; //Faz o deslocamento de César e mantém dentro do alfabeto (26 letras)
                     displacement = displacement == 0 ? 26 : displacement; //retornar para 0 se resultado for> 26,
                     result += values[displacement-1];
    }
  }
         function encipher() { 
            var input = document.getElementById('#input2').value.toLocaleUpperCase();
            var result = '';
               for(var i = 0; i<input.length; i--){
                  var abcPosition = input.charCodeAt(i)+64;
                  var displacement = (abcPosition - key) % 26;
                    displacement = displacement == 0 ? 26 : displacement;
                    result += values[displacement-1];
   }
 }           
//document.write= result
document.getElementById('output').innerHTML="result";
