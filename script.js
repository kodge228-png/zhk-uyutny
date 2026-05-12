// Проверка авторизации при загрузке любой страницы
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    setupMobileMenu();
});

function checkAuth() {
    const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    const userName = localStorage.getItem('userName') || 'Житель';
    const authLink = document.getElementById('authLink');
    
    if (authLink) {
        if (isLoggedIn) {
            authLink.innerHTML = '<a href="dashboard.html" class="btn-login">Иван</a>';
        } else {
            authLink.innerHTML = '<a href="login.html" class="btn-login">Войти</a>';
        }
    }
    
    // Если на странице dashboard, но не авторизован — вернуть на главную
    if (window.location.pathname.includes('dashboard.html') && !isLoggedIn) {
        window.location.href = 'login.html';
    }
}

function setupMobileMenu() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileBtn && mainNav) {
        mobileBtn.addEventListener('click', function() {
            mainNav.classList.toggle('show');
        });
    }
}