document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Menu filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            menuItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        }
    });

    // Dynamically load more menu items    
    const menuItemsData = [
        {
            category: 'starters',
            name: 'Crispy Calamari',
            description: 'Tender squid rings lightly breaded and fried, served with marinara sauce',
            price: '14.99',
            dietary: 'Seafood',
            image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
            category: 'main-course',
            name: 'Grilled Ribeye Steak',
            description: '12oz prime ribeye with garlic butter and truffle mashed potatoes',
            price: '48.99',
            spicy: 'Medium',
            image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
            category: 'seafood',
            name: 'Lobster Thermidor',
            description: 'Fresh lobster in a rich creamy sauce with mushrooms and cheese',
            price: '56.99',
            fresh: 'Fresh Catch',
            image: 'https://images.unsplash.com/photo-1556799513-6af0d9446263?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
            category: 'desserts',
            name: 'Crème Brûlée',
            description: 'Classic French vanilla custard with caramelized sugar crust',
            price: '12.99',
            dietary: 'Vegetarian',
            image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
            category: 'beverages',
            name: 'Signature Martini',
            description: 'House-made infused vodka with fresh fruit and herbs',
            price: '16.99',
            image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        }
    ];// Function to create menu item HTML
    function createMenuItem(item) {
        return `
            <div class="menu-item" data-category="${item.category}">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-info">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <span class="price">$${item.price}</span>
                    ${item.dietary ? `<span class="dietary">${item.dietary}</span>` : ''}
                    ${item.spicy ? `<span class="spicy">${item.spicy}</span>` : ''}
                    ${item.fresh ? `<span class="fresh">${item.fresh}</span>` : ''}
                </div>
            </div>
        `;
    }

    // Add additional menu items
    const menuContainer = document.querySelector('.menu-items');
    menuItemsData.forEach(item => {
        menuContainer.insertAdjacentHTML('beforeend', createMenuItem(item));
    });
});
