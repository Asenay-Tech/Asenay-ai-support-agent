// --- Smooth Scroll for Navbar Links ---
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// --- Navbar Shrink on Scroll ---
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.style.padding = "0.5rem 2rem";
    navbar.style.background = "rgba(11, 16, 32, 0.9)";
  } else {
    navbar.style.padding = "1rem 2rem";
    navbar.style.background = "rgba(11, 16, 32, 0.7)";
  }
});

// --- Button Animation (Pulse Effect) ---
const startBtn = document.getElementById('startBtn');
setInterval(() => {
  startBtn.classList.toggle('pulse');
}, 2000);

// --- Modal Popup for Try Agent ---
const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = `
  <div class="modal-content">
    <h2>🚀 Welcome to Asenay AI Agent!</h2>
    <p>Your AI-powered support assistant is loading...</p>
    <button id="closeModal">Close</button>
  </div>
`;
document.body.appendChild(modal);

startBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

document.getElementById('closeModal').addEventListener('click', () => {
  modal.style.display = 'none';
});

// --- Extra: Close modal when clicking outside ---
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
