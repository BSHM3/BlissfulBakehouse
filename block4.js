$(document).ready(function() {
  // Add event listener to product slider
  $('#product-slider').on('click', '.carousel-item', function() {
    // Get the product details from data attributes
    var productTitle = $(this).data('title');
    var productBenefits = $(this).data('benefits').split(',');
    var productIngredients = $(this).data('ingredients').split(',');

    // Populate the product benefits modal with data
    $('#product-benefits-modal .product-title').text(productTitle);
  

    // Populate the ingredients list
   

    var ingredientsListHtml = '';
    productIngredients.forEach(function(ingredient) {
      ingredientsListHtml += '<li>' + ingredient.trim() + '</li>';
    });
    $('#product-benefits-modal .ingredients-list').html(ingredientsListHtml);

    var benefitsListHtml = '';
    productBenefits.forEach(function(benefit) {
      benefitsListHtml += '<li>' + benefit.trim() + '</li>';
    });
    $('#product-benefits-modal .benefits-list').html(benefitsListHtml);

    // Show the product benefits modal
    $('#product-benefits-modal').modal('show');

    $('#product-slider').carousel('pause');
  });
});
