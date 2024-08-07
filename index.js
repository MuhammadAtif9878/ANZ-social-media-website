document.addEventListener('DOMContentLoaded', function() {
    var popupLink = document.getElementById('popupLink');
    var popup = document.getElementById('popup');
    var closeBtn = document.querySelector('.close');

    popupLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        popup.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', function() {
        popup.classList.add('hidden');
    });

    // Close the popup when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.classList.add('hidden');
        }
    });
});
