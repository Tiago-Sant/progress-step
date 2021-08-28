let progress = document.getElementById('progress')
let prev = document.getElementById('prev')
let next = document.getElementById('next')
let circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
  currentActive++

  if (currentActive > circles.length) {
    currentActive = circles.length
  }

  update()
})

prev.addEventListener('click', () => {
  currentActive--

  if (currentActive < 1) {
    currentActive = 1
  }

  update()
})

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }

    const active = document.querySelectorAll('.active')

    progress.style.width = (active.length - 1) / (circles.length - 1) * 100 + '%';

    if (active.length === 1) {
      prev.disabled = true;
    } else if (active.length === 4) {
      next.disabled = true;
    } else {
      prev.disabled = false;
      next.disabled = false;
    }
  });
}


