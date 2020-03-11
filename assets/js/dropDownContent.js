// Read more popup
var blogPopUpContainer = document.getElementsByClassName('blogPopUpContainer');
var popUpButton = document.getElementsByClassName('popUpButton');
var popUpCloseButton = document.getElementsByClassName('bigClose');
var blogPopUpContent = document.getElementsByClassName('blogPopUpContent');
var popUpImage = document.getElementsByClassName('popUpImage');
var popUpHeading = document.getElementsByClassName('popUpHeading');


function openDropDown() {
  blogPopUpContent[0].scrollTop = 0;
  blogPopUpContainer[0].style.background = 'rgba(0,0,0,0.75)';
  blogPopUpContainer[0].style.pointerEvents = 'auto';
  blogPopUpContent[0].scrollTop = 0;
  blogPopUpContent[0].style.top = '0'
}

function closeDropDown() {
  blogPopUpContainer[0].style.background = 'rgba(0,0,0,0)';
  blogPopUpContainer[0].style.pointerEvents = 'none';
  blogPopUpContent[0].scrollTop = 0;
  blogPopUpContent[0].style.top = '-100%'
}


for (var i = 0; i < popUpButton.length; i++) {
  popUpButton[i].addEventListener('click', (e) => {
    openDropDown()
    // console.log(e.currentTarget.dataset.selected);
    popUpImage[0].src = `assets/images/${e.currentTarget.dataset.selected}.jpg`;
    popUpHeading[0].innerText = e.currentTarget.dataset.personname;
  });
};

blogPopUpContent[0].addEventListener('click', (e) => {
  e.stopPropagation()
});

blogPopUpContent[0].addEventListener('scroll', (e) => {
  if (Math.floor(e.target.scrollHeight - e.target.scrollTop) === e.target.clientHeight) {
    // console.log('scrolled');
    closeDropDown()
  }
  console.log(e.target.scrollHeight - e.target.scrollTop);
  console.log(e.target.clientHeight);
})

blogPopUpContainer[0].addEventListener('click', (e) => {
  closeDropDown()
});

popUpCloseButton[0].addEventListener('click', () => {
  closeDropDown()
});
