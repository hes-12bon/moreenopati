var loaderWrapper  = document.querySelector('.loader-wrapper');
window.addEventListener("load",vanish);
function vanish(){
    loaderWrapper.classList.add("disappear");
}

var loadWrapper = document.getElementById('.loader-wrapper');
    loaderWrapper.style.display='none';


const fadeOut= () => {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    loaderWrapper.classList.add('fade');
}


    

 

