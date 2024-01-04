const productDetails = {
    'Crochet Ribbed Beanie': {
      material: 'Premium wool/acrylic blend',
      sizesAvailable: ['Small', 'Medium', 'Large'],
      colorsAvailable: ['Charcoal Gray', 'Cream', 'Burgundy'],
      careInstructions: 'Hand wash in cold water, reshape, and dry flat',
      description: 'Embrace colder days with our handcrafted ribbed beanie. Made from the finest blend of wool and acrylic, this beanie promises both warmth and style. Its stretchy design ensures a comfortable fit for all head sizes. Perfect for your winter adventures or cozy nights by the fire.',
      price: '$25.99',
      reviews: ["Absolutely love this beanie! So warm and stylish.", "Great quality and feels amazing!"],
    },
    'Crochet Shawl': {
      material: 'Soft acrylic yarn',
      sizesAvailable: ['One size fits all'],
      colorsAvailable: ['Assorted colors'],
      careInstructions: 'Gentle hand wash, lay flat to dry',
      description: 'Wrap yourself in elegance with our crochet shawl. This versatile accessory complements any outfit, providing warmth without compromising style. Handcrafted with care, it’s an ideal addition to your wardrobe.',
      price: '$35.00',
      reviews: ["Love the texture and color of this shawl!", "Perfect for chilly evenings."],
    },
    'Crochet Bag': {
      material: 'Durable cotton blend',
      sizesAvailable: ['One size'],
      colorsAvailable: ['Beige', 'Navy Blue', 'Burgundy'],
      careInstructions: 'Spot clean with a damp cloth',
      description: 'Carry your essentials in style with our crochet bag. Spacious and stylish, it's perfect for everyday use. Handcrafted with attention to detail, this bag combines fashion and functionality.',
      price: '$45.99',
      reviews: ["Absolutely love my crochet bag!", "Very spacious and well-made."],
    },
    'Ombre Shawl': {
      material: 'High-quality gradient yarn',
      sizesAvailable: ['One size fits all'],
      colorsAvailable: ['Ombre shades'],
      careInstructions: 'Hand wash in cold water, lay flat to dry',
      description: 'Add a touch of color to your outfit with our beautiful ombre shawl. The gradient hues create a trendy and eye-catching look. Handcrafted with care, this shawl is perfect for any occasion.',
      price: '$29.99',
      reviews: ["Gorgeous colors! Received many compliments.", "Soft and comfortable to wear."],
    },
    'Triangle Shawl': {
      material: 'Soft and lightweight yarn',
      sizesAvailable: ['One size fits all'],
      colorsAvailable: ['Various colors'],
      careInstructions: 'Machine wash in a delicate cycle, lay flat to dry',
      description: 'Enhance your style with our simple yet elegant triangle shawl. This versatile accessory is easy to drape and adds a touch of sophistication to any outfit. Handcrafted for a perfect finish.',
      price: '$32.50',
      reviews: ["Love the simplicity and elegance of this shawl.", "Great addition to my wardrobe."],
    },
    'Ribbed Wonder Hat': {
      material: 'Cozy ribbed yarn',
      sizesAvailable: ['Kids', 'Adults'],
      colorsAvailable: ['Pink', 'Gray', 'Blue'],
      careInstructions: 'Hand wash in cold water, reshape, and lay flat to dry',
      description: 'Keep warm with our adorable ribbed wonder hat. Whether for kids or adults, this hat adds a touch of cuteness to your winter wardrobe. Handcrafted with love and attention to detail.',
      price: '$18.99',
      reviews: ["The ribbed design is so cute!", "Perfect fit and very comfortable."],
    },
    // Add details for other products
  };
  
  function showDetails(productName) {
    const details = productDetails[productName];
  
    if (details) {
        let detailsHTML = `
          <h2>${productName}</h2>
          <table>
            <tr><th>Details</th><th>Information</th></tr>
            <tr><td>Material</td><td>${details.material}</td></tr>
            <tr><td>Sizes Available</td><td>${details.sizesAvailable.join(', ')}</td></tr>
            <tr><td>Colors Available</td><td>${details.colorsAvailable.join(', ')}</td></tr>
            <tr><td>Care Instructions</td><td>${details.careInstructions}</td></tr>
            <tr><td>Description</td><td>${details.description}</td></tr>
            <tr><td>Price</td><td>${details.price}</td></tr>
            <tr><td>Customer Reviews</td><td>${details.reviews.join('<br>')}</td></tr>
          </table>
        `;
    
        const detailsSection = document.getElementById('productDetails');
        detailsSection.innerHTML = detailsHTML;
      } else {
        const detailsSection = document.getElementById('productDetails');
        detailsSection.innerHTML = "<p>Details for this product are not available.</p>";
      }
    }
    
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
      button.addEventListener('click', function(event) {
        const productName = event.target.previousElementSibling.textContent.trim();
        showDetails(productName);
      });
    });