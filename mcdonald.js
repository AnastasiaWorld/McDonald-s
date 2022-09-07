function revealMenu(){
    if (document.getElementById("menuparent").style.display=="none"){
        document.getElementById("menuparent").style.display="grid";
        document.getElementById("element1").style.display="none";
        document.getElementById("ourmenu").style.color="black";
    }
    else{
        document.getElementById("menuparent").style.display="none";
        document.getElementById("element1").style.display="flex";
    }
}
