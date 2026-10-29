// Animated Tab Switching Logic
function switchTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Deactivate all nav buttons with smooth color reset
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('text-brand-500', 'bg-brand-500/10', 'scale-105');
        btn.classList.add('text-slate-600', 'dark:text-slate-300');
    });

    // Show selected tab with animation
    const targetTab = document.getElementById('tab-' + tabId);
    if (targetTab) {
        setTimeout(() => {
            targetTab.classList.add('active');
        }, 50);
    }

    // Highlight active nav button
    const activeBtn = document.getElementById('nav-' + tabId);
    if (activeBtn) {
        activeBtn.classList.add('text-brand-500', 'bg-brand-500/10', 'scale-105');
        activeBtn.classList.remove('text-slate-600', 'dark:text-slate-300');
    }
}

// Mobile Dropdown Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
}

// Dark/Light Mode Switcher with Icon Animation
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        themeIcon.classList.add('rotate-180', 'scale-125');
        setTimeout(() => themeIcon.classList.remove('rotate-180', 'scale-125'), 300);

        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            themeIcon.className = 'fa-solid fa-sun text-base text-amber-500 transition-all duration-300';
        } else {
            document.documentElement.classList.add('dark');
            themeIcon.className = 'fa-solid fa-moon text-base transition-all duration-300';
        }
    });
}

// Copy Email Clipboard Toast Function with Slide Animation
function copyEmail() {
    navigator.clipboard.writeText('ridahassan.work@gmail.com').then(() => {
        const toast = document.getElementById('toast');
        if (toast) {
            toast.classList.remove('translate-y-[-20px]', 'opacity-0');
            toast.classList.add('translate-y-0', 'opacity-100');
            setTimeout(() => {
                toast.classList.remove('translate-y-0', 'opacity-100');
                toast.classList.add('translate-y-[-20px]', 'opacity-0');
            }, 2500);
        }
    });
}