const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

    // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


// // Slider
// const sliderPhoto = document.querySelector('#slider')
// const closeSliderPhoto = document.querySelectorAll('#slider .close')
// const roomImg = document.querySelectorAll('.room-img')

// roomImg.forEach(element => {
//   element.addEventListener('click', () => {
//     sliderPhoto.classList.add('show')
//   })
// });

// closeSliderPhoto.forEach(element => {
//   element.addEventListener('click',()=> {sliderPhoto.classList.remove('show')})
// });

// // Room Price
// const priceList = {
//     standardRoom: 699999,
//     deluxeRoom: 820000,
//     superiorRoom: 1000000
// }

// const priceRoom = document.querySelectorAll('.room-price .price')
// const [standard, deluxe, superior] = priceRoom
// function changePrice() {
//     standard.innerHTML = priceList.standardRoom.toLocaleString('ID-id');
//     deluxe.innerHTML = priceList.deluxeRoom.toLocaleString('ID-id');
//     superior.innerHTML = priceList.superiorRoom.toLocaleString('ID-id');
// }

// changePrice()
