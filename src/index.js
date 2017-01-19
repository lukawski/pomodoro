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

  setSession (length) {
    this.session = length
  }

  setPause (length) {
    this.pause = length
  }

  startSession () {

  }

  startPause () {

  }
}

document.addEventListener('DOMContentLoaded', function (e) {
  var clock = new Pomodoro(25, 5)
})
