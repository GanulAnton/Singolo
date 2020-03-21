

//Switching color of header elements

var navElement = document.querySelectorAll(".container-nav li a");

var addThumbnailClickHandler = function(element) {
        element.addEventListener("click", function() {
        navElement.forEach(el => el.classList.remove("active"));
        element.classList.add("active");
    });
};
for (var i = 0; i < navElement.length; i++) {
    addThumbnailClickHandler(navElement[i]);
}

//Switching color of header elemenents on scroll page event

document.addEventListener('scroll', scrollFunc);
function scrollFunc(element){
    const curPos = window.scrollY;
    const divs = document.querySelectorAll('main > *');
    const links = document.querySelectorAll('.container-nav li a')
    divs.forEach((el) => {
        if(el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos){
            links.forEach((a) => {
                a.classList.remove('active');
                if(el.getAttribute('id') === a.getAttribute('href').substring(1)){
                    a.classList.add('active');
                }
            });
        }
    });
}

//Switching phone screen 

var verticalPhone = document.querySelector('.iphone-vertical');
var verticalPhoneBlack = document.querySelector('.iphone-black-vertical');
var horizontalPhone = document.querySelector('.iphone-horizontal');
var horizontalPhoneBlack = document.querySelector('.iphone-black-horizontal');
verticalPhone.addEventListener('click', function(){
    verticalPhone.classList.add('displayNone');
});
verticalPhoneBlack.addEventListener('click', function(){
    verticalPhone.classList.remove('displayNone');
});
horizontalPhone.addEventListener('click', function(){
    horizontalPhone.classList.add('displayNone');
});
horizontalPhoneBlack.addEventListener('click', function(){
    horizontalPhone.classList.remove('displayNone');
});


//Switching color of portfolio nav elem and item order

var navPortfolio = document.querySelectorAll(".filter-options-li button");
var addThumbnailClickHandler = function(element) {
    element.addEventListener("click", function() {
        navPortfolio.forEach(el => el.classList.remove("active"));
        element.classList.add("active");
        var portfolioImageStack = document.querySelector('.picture-block');
        var portfolioImages = document.querySelectorAll('.picture-block img');
        const firstPortfolioImg = portfolioImages[0].src;
        for(var i = 0; i < portfolioImages.length; i++){
            if(i == portfolioImages.length-1){
                portfolioImages[i].src = firstPortfolioImg;
            }else{
                portfolioImages[i].src = portfolioImages[i+1].src;
            }
        }
    });
};
for (var i = 0; i < navPortfolio.length; i++) {
    addThumbnailClickHandler(navPortfolio[i]);
}

//Changing active image Portfolio
var portfolioImg = document.querySelector('.picture-block')
portfolioImg.addEventListener('click',(event)=>{
    portfolioImg.querySelectorAll('img').forEach(el => el.classList.remove('activeImg'));
    event.target.classList.add('activeImg');
});


//add message block on button
var sectionBlock = document.querySelector('#message-block')
var blockButton = sectionBlock.querySelector('#close-button');
var subject = document.querySelector('#subject');
var description = document.querySelector('#project');
var form = document.querySelector('form');
var modalSubject = document.querySelector('#resultSubject');
var modalDescription = document.querySelector('#resultDescription');

form.addEventListener('submit', function (evt){
    console.log(subject)
    console.log(description)
    evt.preventDefault();
    sectionBlock.classList.remove('hidden');
    if(subject.value.length != 0){
        modalSubject.textContent = 'Teма:' + subject.value;
    }else{
        modalSubject.textContent = 'Без темы';
    }
    if(description.value.length != 0){
        modalDescription.textContent = 'Описание:' + description.value;
    }else{
        modalDescription.textContent = 'Без описания';
    }

});

blockButton.addEventListener('click', function(evt){
    evt.preventDefault();
    sectionBlock.classList.add('hidden');
    form.reset();
});

// infinity slider

const CursorLeft = document.querySelector('.chev');
const CursorRight = document.querySelector('.chev-2');
const slides = document.querySelectorAll('slider-container>div');


CursorLeft.addEventListener('click', onScrollLeft);
CursorRight.addEventListener('click', onScrollRight);



function onScrollLeft(event){
    var noActiveElement = document.querySelector('.slider-container .displayNone');
    var ActiveElement = document.querySelector('.slider-container .activeElement');
    noActiveElement.classList.remove('displayNone');

    noActiveElement.classList.add('displayLeft');
    
    setTimeout(function(){
    noActiveElement.classList.remove('displayLeft');
    ActiveElement.classList.add('displayNone');
    noActiveElement.classList.add('activeElement');
    ActiveElement.classList.remove('activeElement')
    },500)
}


function onScrollRight(event){
    var noActiveElement = document.querySelector('.slider-container .displayNone');
    var ActiveElement = document.querySelector('.slider-container .activeElement');
    noActiveElement.classList.remove('displayNone');

    noActiveElement.classList.add('displayRight');
    
    setTimeout(function(){
    noActiveElement.classList.remove('displayRight');
    ActiveElement.classList.add('displayNone');
    noActiveElement.classList.add('activeElement');
    ActiveElement.classList.remove('activeElement')
    },500)
    

}
