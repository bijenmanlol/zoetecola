function link(arg) {
  if(arg){
    document.getElementById("ext-web-img-hover").style.display = "block";
    document.getElementById("ext-web-img").style.display = "none";
  }else{
    document.getElementById("ext-web-img").style.display = "block";
    document.getElementById("ext-web-img-hover").style.display = "none";
  }
}