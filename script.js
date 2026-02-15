// scroll ke section turis
document.getElementById("tourismDropdown").addEventListener("click", function () {
			document.getElementById("tourism").scrollIntoView({
			});
		});

// scroll ke section kultur
document.getElementById("natureDropdown").addEventListener("click", function () {
			document.getElementById("nature").scrollIntoView({
			});
		});

// scroll ke section kuliner
document.getElementById("culinaryDropdown").addEventListener("click", function () {
			document.getElementById("culinary").scrollIntoView({
			});
		});

// scroll ke section figur
document.getElementById("inspiringDropdown").addEventListener("click", function () {
			document.getElementById("inspiring").scrollIntoView({
			});
		});

// Deteksi scroll terus ubah navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Parallax background di hero mengikuti gerakan mouse
const heroSection = document.querySelector('#home.hero');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (heroSection && !prefersReducedMotion.matches) {
    let rafId = null;
    let targetX = 0;
    let targetY = 0;

    const updateHeroBackground = () => {
        heroSection.style.setProperty('--hero-x', `${targetX}px`);
        heroSection.style.setProperty('--hero-y', `${targetY}px`);
        rafId = null;
    };

    heroSection.addEventListener('mousemove', (event) => {
        const rect = heroSection.getBoundingClientRect();
        const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
        const relativeY = (event.clientY - rect.top) / rect.height - 0.5;

        // Skala kecil agar efek halus
        const maxOffset = 10;
        targetX = Math.max(-maxOffset, Math.min(maxOffset, relativeX * maxOffset * 2));
        targetY = Math.max(-maxOffset, Math.min(maxOffset, relativeY * maxOffset * 2));

        if (!rafId) {
            rafId = requestAnimationFrame(updateHeroBackground);
        }
    });

    heroSection.addEventListener('mouseleave', () => {
        targetX = 0;
        targetY = 0;
        if (!rafId) {
            rafId = requestAnimationFrame(updateHeroBackground);
        }
    });
}