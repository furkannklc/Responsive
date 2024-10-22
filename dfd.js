const menu=document.getElementById("1")
const icon=document.getElementById("2")
icon.addEventListener("click",degistir)

function degistir(){
    if(menu.style.display=="flex"){
        menu.style.display="none"
        icon.style.marginTop="0px"
        
        
    }
    else{
        menu.style.display="flex"
        icon.style.marginTop="200px"
        icon.style.marginRight="0px"
    }
   

}