
// console.log("linked");
$(window).scroll(()  => {
  if ($(this).scrollTop() >= 5){
    $('.navbar').addClass('sticky')
  } else if ($(this).scrollTop() < 5) {
    $('.navbar').removeClass('sticky')
  }
})

$('.menu-btn').click(() => {
  $('.navbar .menu').toggleClass('active');
})


let currentImgIndex = 0
const numberOfImages = $('.carousel-images').children().length - 1
$('.next').on('click', () => {
  $('.carousel-images').children().eq(currentImgIndex).css('display','none')
  if (currentImgIndex < numberOfImages){
    currentImgIndex++
  } else {
    currentImgIndex = 0
  }
  $('.carousel-images').children().eq(currentImgIndex).css('display','block')
})


//  let currentImgIndex = 0;
// const numberOfImages = $('carousel-images').children().length - 1
// $('.next').on('click', () => {
//   $('.carousel-images').children().eq(currentImgIndex).css('display','none')
//   if ( currentImgIndex < numberOfImages) {
//     currentImgIndex++
//   } else {
//     currentImgIndex = 0
//   }
//   $('.carousel-images').children().eq(currentImgIndex).css('display','block')
// })
//
// $('.previous').on('click', () => {
//   $('.carousel-images').children()eq(currentImgIndex).css('display','block')
//   if (currentImgIndex > 0){
//     currentImgIndex--
//   } else {
//     currentImgIndex = numberOfImages
//   }
//   $('.carousel-images').children().eq(currentImgIndex).css('display','block')
// })
