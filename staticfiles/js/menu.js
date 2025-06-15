document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuCategories = document.querySelectorAll('.menu-category');

    // Show all categories initially
    menuCategories.forEach(category => {
        category.classList.add('active');
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            menuCategories.forEach(category => {
                if (filterValue === 'all') {
                    category.classList.add('active');
                } else {
                    if (category.getAttribute('data-category') === filterValue) {
                        category.classList.add('active');
                    } else {
                        category.classList.remove('active');
                    }
                }
            });
        });
    });
});
