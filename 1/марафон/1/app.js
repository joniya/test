const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener ('click' , () => {
clearActionClasses()

slide.classList.add('active')
    })
}

function clearActionClasses(){
     slides.forEach((slide) =>{
         slide.classList.remove('active')
     } )
}