// NOTE: This should be able to be replaced by the CSS animation mockLoading but it doesn't seem to be handling custom number props smoothly
// (just alternates between 0 & 100)
let loadingCircle = document.querySelector('#loading-circle');
window.setInterval(() => {
  let percentage = Math.abs(Math.sin(performance.now() * 0.0005)) * 100
  loadingCircle.style.setProperty('--percentage', percentage)
  loadingCircle.innerText = `${Math.trunc(percentage)}%`;
}, 1000 / 60);