
// const mainBtns = document.querySelectorAll('.main-btn')
//
// mainBtns.forEach(btn => {
//   let ripple;
//   mainBtns.addEventListener('mouseenter',(e) => {
//     const left = e.clientX - e.target.getBoundingClientRect().left;
//     const top = e.clientY - e.target.getBoundingClientRect().top;
//
//     ripple = document.createElement('div')
//     ripple.classList.add('ripple')
//     ripple.style.left = `${left}px`
//     ripple.style.top =  `${top}px`
//     mainBtns.prepend(ripple)
//   })
//   mainBtns.addEventListener('mouseleave',() => {
//     mainBtns.removeChild(ripple)
//   })
// })

const aboutMeText = document.querySelector('.about-me-text')
const aboutMeTextContent = 'I am a software developer and I like creating things'
Array.from(aboutMeTextContent).forEach(char => {
  const span = document.createElement('span')
  span.textContent = char
  aboutMeText.append(span)

  span.addEventListener('mouseenter', e => {
    e.target.style.animation = "aboutMeTextAnim 10s infinite"
  })
})
