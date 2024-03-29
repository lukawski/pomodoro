class Pomodoro {
  constructor (session, pause) {
    this.session = session
    this.pause = pause
  }

  getSession () {
    return this.session
  }

  getPause () {
    return this.pause
  }

  formatted (n) {
    let min = (Math.floor(n / 60) < 10) ? '0' + Math.floor(n / 60) : Math.floor(n / 60)
    let sec = (n % 60 < 10) ? '0' + n % 60 : n % 60
    return min + ':' + sec
  }

  setSession (length) {
    this.session = length
  }

  setPause (length) {
    this.pause = length
  }
}

document.addEventListener('DOMContentLoaded', () => {
  var clock = new Pomodoro(1500, 300)
  var interval = 0
  var box = document.getElementById('session')
  var sL = document.getElementById('sL')
  var bL = document.getElementById('bL')
  var rem = 0
  var btns = document.getElementsByClassName('btn')
  var btnsL = btns.length

  for (let i = 0; i < btnsL; i++) {
    btns[i].addEventListener('click', e => {
      if (box.getAttribute('data-status') === 'off') {
        if (e.target.attributes[1].value === 'session') {
          let newV = Math.floor(clock.getSession() / 60)
          e.target.innerText === '+' ? newV++ : newV--
          clock.setSession(newV * 60)
          sL.innerText = newV
          if (box.getAttribute('data-mode') === 'session') {
            box.innerText = newV
            rem = 0
          }
        } else {
          let newV = Math.floor(clock.getPause() / 60)
          e.target.innerText === '+' ? newV++ : newV--
          clock.setPause(newV * 60)
          bL.innerText = newV
          if (box.getAttribute('data-mode') === 'break') {
            box.innerText = newV
            rem = 0
          }
        }
      } else return true
    })
  }

  box.addEventListener('click', () => {
    if (box.getAttribute('data-status') === 'on') {
      clearInterval(interval)
      box.setAttribute('data-status', 'off')
    } else start(rem)
  })

  let start = r => {
    box.setAttribute('data-status', 'on')
    let counter = 0
    let color = (box.getAttribute('data-mode') === 'session') ? '#2E7D32' : '#B71C1C'
    let full = (box.getAttribute('data-mode') === 'session') ? clock.getSession() : clock.getPause()
    if (r) counter = r
    else {
      if (box.getAttribute('data-mode') === 'session') counter = clock.getSession()
      else counter = clock.getPause()
    }
    let minutes = 0
    let seconds = 0
    let a = 0
    interval = setInterval(() => {
      counter--
      rem = counter
      minutes = (Math.floor(counter / 60) < 10) ? '0' + Math.floor(counter / 60) : Math.floor(counter / 60)
      seconds = (counter % 60 < 10) ? '0' + counter % 60 : counter % 60
      a = full - counter
      box.innerText = minutes + ':' + seconds
      box.setAttribute('style', `background: linear-gradient(0deg, ${color} ${a / full * 100}%, #262626 0%);`)
      console.log(a / full * 100, full)
      if (counter === 0) {
        clearInterval(interval)
        box.getAttribute('data-mode') === 'session' ? box.setAttribute('data-mode', 'break') : box.setAttribute('data-mode', 'session')
        start()
      }
    }, 1000)
  }
})
