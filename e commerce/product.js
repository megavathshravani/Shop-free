// script.js

// Add to Cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-product-id');
        alert(`Product ${productId} added to cart!`);
        // Implement actual cart functionality here
    });
});

// Pagination functionality
let currentPage = 1;
const itemsPerPage = 6; // Number of products per page

function showPage(page) {
    const productItems = document.querySelectorAll('.product-item');
    const totalItems = productItems.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (page < 1 || page > totalPages) return;

    productItems.forEach((item, index) => {
        item.style.display = (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) ? 'block' : 'none';
    });

    currentPage = page;
}

function changePage(step) {
    const totalItems = document.querySelectorAll('.product-item').length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (currentPage + step >= 1 && currentPage + step <= totalPages) {
        showPage(currentPage + step);
    }
}

// Initialize pagination
showPage(currentPage);
