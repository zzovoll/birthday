document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let currentPage = 0;

    function showPage(index) {
        pages.forEach(page => page.classList.remove('active'));
        pages[index].classList.add('active');
    }

    next.addEventListener('click', () => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    });

    prev.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    });

    // 添加触摸滑动支持
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && currentPage < pages.length - 1) {
                currentPage++;
                showPage(currentPage);
            } else if (diff < 0 && currentPage > 0) {
                currentPage--;
                showPage(currentPage);
            }
        }
    }
}); 
