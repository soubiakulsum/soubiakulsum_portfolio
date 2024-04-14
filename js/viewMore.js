function viewMore(){
    var btnText=document.getElementById("viewMore");
    var expandProduct=document.getElementById("expandProduct");
    var dots=document.getElementById("dots");
    if(dots.style.display === "none"){
       dots.style.display = "inline";
     btnText.innerHTML="View More";
     expandProduct.style.display="none";
    }
    else{
       dots.style.display = "none";
     btnText.innerHTML="View Less";
     expandProduct.style.display="block";
    }
 }