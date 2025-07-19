const apiURL = 'https://www.course-api.com/javascript-store-products';

// Step 3: fetchProductsThen
function fetchProductsThen() {
  fetch(apiURL)
    .then((response) => response.json())
    .then((products) => {
      products.forEach((product) => {
        console.log(product.fields.name);
      });
    })
    .catch((error) => {
      console.error('Fetch error (then):', error);
    });
}

// Step 4: fetchProductsAsync
async function fetchProductsAsync() {
  try {
    const response = await fetch(apiURL);
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}

// Step 5: displayProducts
function displayProducts(products) {
  const container = document.getElementById('product-container');
  container.innerHTML = ''; // clear any previous content

  const firstFive = products.slice(0, 5);

  firstFive.forEach((product) => {
    const { name, price, image } = product.fields;
    const imageUrl = image[0].url;

    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    productCard.innerHTML = `
      <img src="${imageUrl}" alt="${name}" />
      <h3>${name}</h3>
      <p>$${(price / 100).toFixed(2)}</p>
    `;

    container.appendChild(productCard);
  });
}

// Step 6: handleError
function handleError(error) {
  console.error('An error occurred:', error.message);
}

// Step 7: Call both fetches
fetchProductsThen();
fetchProductsAsync();