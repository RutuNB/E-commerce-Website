
    document.addEventListener('DOMContentLoaded', function () {
        // Select all quantity input fields
        var quantityInputs = document.querySelectorAll('.quantity-input');
    
        // Add event listener to each input field
        quantityInputs.forEach(function (input) {
            input.addEventListener('change', function () {
                // Get the parent row of the input field
                var row = input.parentElement.parentElement;
    
                // Get the price and quantity
                var price = parseFloat(row.querySelector('td:nth-child(4)').textContent.replace('$', ''));
                var quantity = parseInt(input.value);
    
                // Calculate subtotal for this item
                var subtotal = price * quantity;
    
                // Update the subtotal for this item
                row.querySelector('.subtotal').textContent = '$' + subtotal.toFixed(2);
    
                // Update the total subtotal and total
                updateTotal();
            });
        });
    
        // Function to update total subtotal and total
        function updateTotal() {
            var subtotals = document.querySelectorAll('.subtotal');
            var totalSubtotal = 0;
    
            // Calculate total subtotal
            subtotals.forEach(function (subtotal) {
                totalSubtotal += parseFloat(subtotal.textContent.replace('$', ''));
            });
    
            // Update total subtotal
            document.getElementById('cart-subtotal').textContent = '$' + totalSubtotal.toFixed(2);
    
            // Calculate and update total
            var additionalCosts = 0; // You can add additional costs here if needed
            var total = totalSubtotal + additionalCosts;
            document.getElementById('cart-total').textContent = '$' + total.toFixed(2);
        }
    });
