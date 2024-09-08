$(document).ready(function() {
  // Add event listener to product slider
  $('#product-slider').on('click', '.carousel-item', function() {
    // Get the product details from data attributes
    var productTitle = $(this).data('title');
    var productDescriptions = $(this).data('descriptions').split(',');
    var productBenefits = $(this).data('benefits').split(',');
    var productIngredients = $(this).data('ingredients').split(',');

    // Populate the product benefits modal with data
    $('#product-benefits-modal .product-title').text(productTitle);
  

    // Populate the ingredients list
   
    var descriptionsListHtml = '';
    productDescriptions.forEach(function(description) {
      descriptionsListHtml += '<li>' + description.trim() + '</li>';
    });
    $('#product-benefits-modal .descriptions-list').html(descriptionsListHtml);

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

  
    $('#product-benefits-modal').modal('show');

    $('#product-slider').carousel('pause');
  });
});
