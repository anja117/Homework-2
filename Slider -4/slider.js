var isMouseIn = false;
var slideIndex = 1;
showSlides(slideIndex);
var box = document.querySelector('.slideshow-container');


box.addEventListener('mouseenter',function() {
    isMouseIn = true;
    console.log('isss');
})
box.addEventListener('mouseleave',function() {
    isMouseIn = false;
    console.log('assasaas');
})

console.log(box);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



   
    
    document.onkeydown = function(e) {
        if(!isMouseIn){return;}
        console.log("radipls");
        switch (e.keyCode) {
            case 37:
                //left
                e.preventDefault();
                slideIndex--;
                showSlides(slideIndex);
                break;
            case 39:
                //right
                e.preventDefault();
                slideIndex++;
                showSlides(slideIndex);
                break;
        }

    }
    

document.querySelectorAll('.slide').forEach(item  =>{
    item.addEventListener('click',event=>{
        document.querySelector('.popup').classList.add('activepopup');
        document.querySelector('.popup-slide').setAttribute('src',event.target.getAttribute('src'));
    })
})

    
    



