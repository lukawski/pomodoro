document.addEventListener('DOMContentLoaded', function (e) {
  init()
})

function init () {
  document.getElementById('lol').addEventListener('click', startTimer)
}

function startTimer () {
  var start = new Date()
  setInterval(function () {
    console.log(Math.floor((new Date() - start) / (60 * 1000)))
  }, 1000)
}
