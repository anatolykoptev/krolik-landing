// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

function openMobileMenu() {
    mobileMenu.classList.add('active');
    mobileMenuOverlay.classList.remove('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.add('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMobileMenu);
if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeMobileMenu);

// Close menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Close mobile menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Smooth Scroll with Offset for Sticky Nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#main') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offset = 80; // Nav height
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Progress Bar
function updateScrollProgress() {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) progressBar.style.width = scrolled + '%';
}
window.addEventListener('scroll', updateScrollProgress);

// Animated Counter
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const suffix = element.getAttribute('data-suffix') || '';
    const duration = 1500;
    const steps = 50;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, duration / steps);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Check if content is 0 or 0% to avoid re-animating
        if (entry.isIntersecting && (entry.target.textContent === '0' || entry.target.textContent === '0%')) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-counter').forEach(counter => {
    counterObserver.observe(counter);
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', function () {
        const answer = this.nextElementSibling;
        const icon = this.querySelector('.faq-icon');
        const isExpanded = this.getAttribute('aria-expanded') === 'true';

        // Close all other FAQs
        document.querySelectorAll('.faq-question').forEach(otherButton => {
            if (otherButton !== this) {
                const otherAnswer = otherButton.nextElementSibling;
                const otherIcon = otherButton.querySelector('.faq-icon');
                if (otherAnswer && otherIcon) {
                    otherAnswer.classList.add('hidden');
                    otherIcon.classList.remove('rotate-180');
                    otherButton.setAttribute('aria-expanded', 'false');
                }
            }
        });

        // Toggle current FAQ
        if (isExpanded) {
            answer.classList.add('hidden');
            icon.classList.remove('rotate-180');
            this.setAttribute('aria-expanded', 'false');
        } else {
            answer.classList.remove('hidden');
            icon.classList.add('rotate-180');
            this.setAttribute('aria-expanded', 'true');
        }
    });
});

// Spotlight Hover Effect
document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.spotlight-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Terminal Typing Effect
function initTerminalEffect() {
    const terminal = document.getElementById('hero-terminal');
    if (!terminal) return;

    const inputSpan = terminal.querySelector('.cmd-input');
    if (!inputSpan) return;

    const commandText = "krolik felix start --prd PRD.json";
    inputSpan.textContent = "";

    // Output content to show after typing
    const outputLines = [
        '<span class="text-zinc-500">→ Loading PRD context from ./PRD.json...</span>',
        '<span class="text-emerald-400">✔ PRD Parsed</span> <span class="text-zinc-500">(3 tasks found)</span>',
        '<br><span class="text-zinc-400 font-bold">Task 1: [Refactor Auth Logic]</span>',
        '  <span class="text-zinc-500">Complexity:</span> <span class="text-yellow-400">Medium</span>',
        '  <span class="text-zinc-500">Routing to:</span> <span class="text-emerald-400 font-bold">Claude Haiku</span> <span class="text-zinc-600">(Cheap Tier)</span>',
        '',
        '<span class="text-zinc-400 font-bold">Task 2: [Database Schema Migration]</span>',
        '  <span class="text-zinc-500">Complexity:</span> <span class="text-red-400">High</span>',
        '  <span class="text-zinc-500">Routing to:</span> <span class="text-purple-400 font-bold">Claude Opus</span> <span class="text-zinc-600">(Premium Tier)</span>',
        '',
        '<span class="text-emerald-500 font-bold">✔ Optimization Complete.</span> <span class="text-zinc-400">Estimated cost: $0.04 (Saved $0.56)</span>'
    ];

    let charIndex = 0;

    // Typing animation
    function typeCommand() {
        if (charIndex < commandText.length) {
            inputSpan.textContent += commandText.charAt(charIndex);
            charIndex++;
            setTimeout(typeCommand, 50 + Math.random() * 50); // Random typing speed
        } else {
            // After typing, wait a bit then show output
            setTimeout(showOutput, 500);
        }
    }

    let lineIndex = 0;
    function showOutput() {
        if (lineIndex < outputLines.length) {
            const line = document.createElement('div');
            line.innerHTML = outputLines[lineIndex];
            line.classList.add('mt-1', 'opacity-0', 'animate-fade-in');
            line.style.animationFillMode = 'forwards';
            terminal.appendChild(line);

            // Auto scroll to bottom
            terminal.scrollTop = terminal.scrollHeight;

            lineIndex++;
            setTimeout(showOutput, 200); // Speed of output lines
        }
    }

    // Start typing after a short delay
    setTimeout(typeCommand, 1000);
}

// Initialize terminal when in view
const terminalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            initTerminalEffect();
            terminalObserver.unobserve(entry.target);
        }
    });
});

const heroTerminal = document.getElementById('hero-terminal');
if (heroTerminal) {
    terminalObserver.observe(heroTerminal);
}

// Add CSS animation for fade-in manually if not in CSS
/*
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
    animation: fadeIn 0.3s ease-out;
}
*/
