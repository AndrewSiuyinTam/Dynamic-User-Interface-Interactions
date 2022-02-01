const clickToggle = () => {
    let options = document.getElementsByTagName('li');   
    for(let i = 0;i<options.length;i++){
        options[i].classList.toggle('hide');

        
    }
}
const mobileNav = (text) => {
    const mobile_header = document.getElementById('message');
    mobile_header.textContent = text;
}

// Carousel Implementation
let max_display = 2;

let currentSlide = 0;
function nextSlide(){
    if(currentSlide + 1 > 3){
        currentSlide = 1;
    }
    else{
        currentSlide+=1;
    }
    
    showSlide(currentSlide)
}
function prevSlide(){
    if(currentSlide - 1 < 0){
        currentSlide = 3;
    }
    else{
        currentSlide-=1;
    }
    
    
    showSlide(currentSlide);
}
function showSlide(n) {
    n = currentSlide;
    let images = document.getElementsByTagName('img');
    images[n].classList.remove('hide');

    
    for(let i=0;i<images.length;i++){
        if(images[i] != images[n]){
            images[i].classList.add('hide');
        }
    }
  
//     for(let i = 0; i < images.length;i++){
//         if(i != n){
//             images[i].classList.add('hide');
//         }
// }

}