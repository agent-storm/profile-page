function LoginPageSwitcher(){
    window.location = "https://calset-fb8e6.web.app";
}
const projectsContainer = document.querySelector(".projects-container-div")
window.addEventListener('scroll',() => {
    const scrollPx = window.scrollY;
    // console.log(scrollPx);
    if(scrollPx<430){
        document.body.style.backgroundColor = "#FFFBFE";
    } else if(scrollPx>830 && scrollPx<1300) {
        document.body.style.backgroundColor = "#373F51"; //"#1A1B25"
    }
});
function scrollToProjects(){
    const element = document.getElementById("project-text");
    element.scrollIntoView();
}
let curElementIndx = 0;
let ProjectsList = Array("stormcode-app","auto-vid-editor","score-scrapper","cal-set")
function ProjectScroll(direction) {
    console.log(ProjectsList[curElementIndx]);
    if(direction == "up") {
        if(curElementIndx == 0) return;
        curElementIndx-=1;
    } 
    else if (direction == "down") {
        if(curElementIndx == 3) return;
        curElementIndx+=1;
    }
    let projectDiv = document.getElementById(ProjectsList[curElementIndx]);
    let scrollVal = projectDiv.offsetTop;
    document.getElementById("projects-scrolling-div").scrollTop = scrollVal;
}
