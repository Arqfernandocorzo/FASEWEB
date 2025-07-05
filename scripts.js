document.querySelectorAll('.project-card').forEach(card => {
  const imgs = card.querySelectorAll('.carousel-img');
  const prevBtn = card.querySelector('.carousel-btn.prev');
  const nextBtn = card.querySelector('.carousel-btn.next');
  let currentIndex = 0;

  function showImage(index) {
    imgs.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
    showImage(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imgs.length;
    showImage(currentIndex);
  });
});

function openLightbox(src) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}