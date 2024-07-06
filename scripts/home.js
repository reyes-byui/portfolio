// mute video
document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('#background-video video');
    video.muted = true;
    video.autoplay = true;
    video.classList.add('show');
  });
  