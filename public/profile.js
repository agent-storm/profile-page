function LoginPageSwitcher(){
    window.location = "https://calset-fb8e6.web.app";
}
const projectsContainer = document.querySelector(".projects-container-div")
window.addEventListener('scroll',() => {
    const scrollPx = window.scrollY;
    console.log(scrollPx);
    if(scrollPx<430){
        document.body.style.backgroundColor = "#FFFBFE";
    } else if(scrollPx>930 && scrollPx<1300) {
        document.body.style.backgroundColor = "#373F51"; //"#1A1B25"
    }
});
