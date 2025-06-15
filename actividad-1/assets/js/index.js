let img = document.querySelector("#imagen")

img.addEventListener("click",()=>{
    if(img.style.border == ''){
        img.style.border = '2px solid red'
    }else{
        img.style.border = ''
    }
})