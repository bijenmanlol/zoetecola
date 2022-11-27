let exp = document.getElementsByClassName("examples")
let ex = 0;

exp[ex].style.display = "block";

function run() {
  ex++;
 if(ex == 4){
   ex = 0;
   exp[3].style.display = "none"
   exp[ex].style.display = "block"
 }else{
    exp[ex - 1].style.display = "none"
    exp[ex].style.display = "block"
  }
}