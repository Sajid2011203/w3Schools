let dot1 = document.getElementById('dot1')
let dot2 = document.getElementById('dot2')
let dot3 = document.getElementById('dot3')
let counter = document.getElementById('counter-image')
let captionText = document.getElementById('caption-text')
let slideImage = document.getElementById('slide-image')
window.onload = function () {
  dot1.style.backgroundColor = 'gray'
}
dot1.addEventListener('click', function () {
  dotOne()
})

dot2.addEventListener('click', function () {
  dotTwo()
})

dot3.addEventListener('click', function () {
  dotThree()
})

function dotOne() {
  counter.innerHTML = '1 / 3'
  captionText.innerHTML = 'Caption Text'
  slideImage.src = 'images/img_nature_wide.jpg'
  dot1.style.backgroundColor = 'gray'
  dot2.style.backgroundColor = 'rgb(223, 223, 223)'
  dot3.style.backgroundColor = 'rgb(223, 223, 223)'
}

function dotTwo() {
  counter.innerHTML = '2 / 3'
  captionText.innerHTML = 'Caption Two'
  slideImage.src = 'images/img_snow_wide.jpg'
  dot2.style.backgroundColor = 'gray'
  dot1.style.backgroundColor = 'rgb(223, 223, 223)'
  dot3.style.backgroundColor = 'rgb(223, 223, 223)'
}

function dotThree() {
  counter.innerHTML = '3 / 3'
  captionText.innerHTML = 'Caption Three'
  slideImage.src = 'images/img_mountains_wide.jpg'
  dot3.style.backgroundColor = 'gray'
  dot1.style.backgroundColor = 'rgb(223, 223, 223)'
  dot2.style.backgroundColor = 'rgb(223, 223, 223)'
}