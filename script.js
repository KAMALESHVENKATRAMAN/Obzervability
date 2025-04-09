function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const brandName = document.getElementById('brandName');
  const toggleBtn = document.getElementById('sidebarToggle');
  const openBtn = document.getElementById('sidebarOpen');

  sidebar.classList.toggle('collapsed');
  brandName.innerText = sidebar.classList.contains('collapsed') ? 'R' : 'Reqrutify';

  if (sidebar.classList.contains('collapsed')) {
    toggleBtn.style.display = 'none';
    openBtn.style.display = 'flex';
  } else {
    toggleBtn.style.display = 'flex';
    openBtn.style.display = 'none';
  }
}

window.onload = () => {
  const sidebar = document.getElementById('sidebar');
  const brandName = document.getElementById('brandName');
  const toggleBtn = document.getElementById('sidebarToggle');
  const openBtn = document.getElementById('sidebarOpen');

  // Ensure sidebar starts collapsed
  sidebar.classList.add('collapsed');
  brandName.innerText = 'R';
  toggleBtn.style.display = 'none';
  openBtn.style.display = 'flex';

  updateScroll();
};

let scrollIndex = 0;
const maxVisible = 3;
const cardContainer = document.getElementById("featureCards");

function scrollLeft() {
  if (scrollIndex > 0) {
    scrollIndex--;
    updateScroll();
  }
}

function scrollRight() {
  if (scrollIndex < cardContainer.children.length - maxVisible) {
    scrollIndex++;
    updateScroll();
  }
}

function updateScroll() {
  const cardWidth = cardContainer.children[0].offsetWidth + 16;
  const scrollAmount = cardWidth * scrollIndex;

  Array.from(cardContainer.children).forEach((card, index) => {
    card.classList.remove("active-center");
    if (index === scrollIndex + 1) {
      card.classList.add("active-center");
    }
  });

  cardContainer.scrollTo({
    left: scrollAmount,
    behavior: "smooth"
  });

  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll(".carousel-dots span");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === scrollIndex);
  });
}

setInterval(() => {
  scrollIndex = (scrollIndex < cardContainer.children.length - maxVisible) ? scrollIndex + 1 : 0;
  updateScroll();
}, 5000);

const video = document.getElementById('projectVideo');

function seekVideo(seconds) {
  video.currentTime += seconds;
}

document.getElementById('videoModal').addEventListener('hidden.bs.modal', function () {
  video.pause();
});

document.getElementById('videoModal').addEventListener('shown.bs.modal', function () {
  video.play();
});