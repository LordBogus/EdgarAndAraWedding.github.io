const slides= document.querySelectorAll (".slide");
let currentIndex=0;

document.getElementById("next").addEventListener("click",()=>{
    changeSlide(1);
});
document.getElementById("prev").addEventListener("click",()=>{
        changeSlide(-1);
});

function changeSlide (direction) { 

    // direction === 1

    // slides[0] - we remove the class active
    slides[currentIndex].classList.remove("active")
    slides[currentIndex].classList.add("non-active")

    // 0 + 1, currentIndex === 1
    currentIndex += direction
   
    // currentIndex === 1, slides.length === 5
    if(currentIndex >= slides.length) {
        currentIndex = 0;
    }else if(currentIndex < 0) {
        currentIndex =slides.length-1;
    }
    
    slides[currentIndex].classList.remove("non-active")
    slides[currentIndex].classList.add("active")
    // slides[1]

    console.log("slides[currentIndex]", slides[currentIndex]);
}
