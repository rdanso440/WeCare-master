function responsiveNav() {
    const menuItems = document.getElementById("menu-items");
    if (menuItems.className === "menu-items") {
        menuItems.className += " nav-active";
    } else {
        menuItems.className = "menu-items";
    }
}

// Get references to the radio buttons and the amount field
const radioButtons = document.querySelectorAll('input[type="radio"]');
const amountField = document.getElementById('amount-field');

// Add event listener to each radio button
radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('change', function() {
        // Check if the "Other" option is selected
        if (this.parentNode.classList.contains('other-amount') && this.checked) {
            // If selected, show the amount field
            amountField.style.display = 'block';
            amountField.innerHTML = '<input type="number" name="amount" placeholder="Enter other amount" required>'
        } else {
            // If not selected, hide the amount field
            amountField.style.display = 'none';
            amountField.innerHTML = ''
        }
    });
});

function submitDonationForm() {
    // Get the form element
    var form = document.getElementById('donation-form');
    
    // Check if the form is valid
    if (form.checkValidity()) {
      // Reset the form
      form.reset();
      // Redirect to checkout.html
      window.location.href = "checkout.html";
    }
}