console.log("linked");

const aboutMeText = document.querySelector('.about-me-text')
const aboutMeTextContent = 'I am a software developer and I like creating things'
Array.from(aboutMeTextContent).forEach(char => {
  const span = document.createElement('span')
  span.textContent = char
  aboutMeText.append(span)
})
