function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function showAlert() {
  alert("Terima kasih sudah mengunjungi portofolio saya!");
}

const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  faders.forEach(fade => {
    const rect = fade.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      fade.classList.add('show');
    }
  });
});

document.querySelectorAll(".flip-card").forEach(card => {
  card.addEventListener("click", function() {
    this.querySelector(".flip-card-inner").classList.toggle("flip");
  });
});

const video = document.getElementById('video');
const speed = document.getElementById('speed');

speed.addEventListener('change', () => {
  video.playbackRate = speed.value;
});

function downloadVideo(){
  const a = document.createElement('a');
  a.href = video.currentSrc;
  a.download = 'video.mp4';
  a.click();
}

async function pipMode(){
  if(document.pictureInPictureElement){
    document.exitPictureInPicture();
  } else {
    await video.requestPictureInPicture();
  }
}


