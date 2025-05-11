// hulat for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // mobile menu burgir
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        
        // Animate hamburger to X
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => bar.classList.toggle('active'));
    });
    
    // remove welcome overlay after animation
    setTimeout(() => {
        const welcomeOverlay = document.querySelector('.welcome-overlay');
        if (welcomeOverlay) {
            welcomeOverlay.style.display = 'none';
        }
    }, 3000);
    
    // smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            }
        });
    });
    
    // mu ug add parallax effect to background
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const bgContainer = document.querySelector('.bg-container');
        
        if (bgContainer) {
            bgContainer.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        }
    });
});
// HOME JS



// ABOUT JS
document.addEventListener('DOMContentLoaded', () => {
    const bgButton = document.getElementById('change-bg-btn');
    const bgContainer = document.querySelector('.bg-container');
  
    const gifs = [
      'background.gif',
      'tokyo.gif',
      'city.gif',
      'cafe.gif',
      'forest.gif',
      'train.gif',
      'diluc.gif',
      'wait-train.gif',
      'genshin-green.gif'
    ];
  
    let currentGifIndex = 0;
    let isFading = false;
  
    bgButton.addEventListener('click', () => {
      if (isFading) return;
      isFading = true;
  
      // Trigger fade out
      bgContainer.style.opacity = '0';
  
      setTimeout(() => {
        // Update background
        currentGifIndex = (currentGifIndex + 1) % gifs.length;
        bgContainer.style.backgroundImage = `url('${gifs[currentGifIndex]}')`;
  
        // Trigger fade in
        bgContainer.style.opacity = '0.7';
  
        // Unlock click after fade
        setTimeout(() => {
          isFading = false;
        }, 500);
      }, 500);
    });
  });
 
  