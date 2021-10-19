//tabs

var tabs = document.getElementById('tab__btns');
var content = document.querySelectorAll('.tab__content');
const tabsEl = Array.from(document.querySelectorAll('.tab__btn'));
console.log(tabsEl);

function changeClass(el){
    for(var i = 0; i < tab__btns.children.length; i++){
        tab__btns.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

for(let index = 0; index < tabsEl.length; index++) {
    tabsEl[index].addEventListener('click',function(e){
        var currTab = event.target.dataset.btn;
        changeClass(event.target);
        for(var i = 0; i < content.length; i++){
            content[i].classList.remove('active');
            if(content[i].dataset.content === currTab){
                content[i].classList.add('active');
            }
        }
    })
}


//modals 

var btnOpen = document.getElementById('modal__btn');
var modal = document.getElementById('modal__wrapper');

var overlay = document.getElementById('modal__overlay');

btnOpen.addEventListener('click',function(){
    modal.classList.add('active');
});

function closeModal(){
    modal.classList.remove('active');
}

overlay.addEventListener('click',closeModal);

//sliders

const prev = document.getElementById('slider-btn_prev'),
      next = document.getElementById('slider-btn_next'),
      slides = document.querySelectorAll('.slider__item'),
      dots = document.querySelectorAll('.slider__dot'),
      slidesWrap = document.querySelectorAll('.slider__wrapper');

let index = 0;

const activeSlide = n => {
    for(slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if(index == slides.length - 1){
        index = 0;
        prepareCurrentSlide(index);
    }else{
        index++;
        prepareCurrentSlide(index);
    }
};
const prevSlide = () => {
    if(index == 0){
        index = slides.length - 1;
        prepareCurrentSlide(index);
    }else{
        index--;
        prepareCurrentSlide(index);
    }
};

dots.forEach((item,indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
        clearInterval(interval);
    })
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const interval = setInterval(nextSlide, 3500);