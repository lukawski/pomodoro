class Pomodoro {
  constructor (session, pause) {
    this.session = session
    this.pause = pause
    this.sessionInterval = 0
  }

  getSession () {
    return this.session
  }

  getPause () {
    return this.pause
  }

  setSession (length) {
    this.session = length
  }

  setPause (length) {
    this.pause = length
  }
}

document.addEventListener('DOMContentLoaded', function (e) {
  var clock = new Pomodoro(15, 30)
  var sessionInterval = 0
  var pauseInterval = 0
  var leftBox = document.getElementById('left')

  document.getElementById('start').addEventListener('click', function () {
    session()
  })

  function session () {
    let counter = clock.getSession()
    let minutes = 0
    let seconds = 0
    sessionInterval = setInterval(function () {
      counter--
      minutes = (Math.floor(counter / 60) < 10) ? '0' + Math.floor(counter / 60) : Math.floor(counter / 60)
      seconds = (counter % 60 < 10) ? '0' + counter % 60 : counter % 60
      leftBox.innerText = minutes + ':' + seconds
      if (counter === 0) {
        clearInterval(sessionInterval)
        pause()
      }
    }, 1000)
  }

  function pause () {
    let counter = clock.getPause()
    let minutes = 0
    let seconds = 0
    pauseInterval = setInterval(function () {
      counter--
      minutes = (Math.floor(counter / 60) < 10) ? '0' + Math.floor(counter / 60) : Math.floor(counter / 60)
      seconds = (counter % 60 < 10) ? '0' + counter % 60 : counter % 60
      leftBox.innerText = minutes + ':' + seconds
      if (counter === 0) {
        clearInterval(pauseInterval)
        session()
      }
    }, 1000)
  }
})
