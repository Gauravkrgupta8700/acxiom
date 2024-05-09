let products = [];

function addOrUpdateProduct() {
    const productId = document.getElementById("productId").value;
    const productName = document.getElementById("productName").value;
    const productType = document.getElementById("productType").value;
    const productPrice = document.getElementById("productPrice").value;

    const product = {
        id: productId,
        name: productName,
        type: productType,
        price: productPrice
    };

    const existingProductIndex = products.findIndex(item => item.id === productId);

    if (existingProductIndex !== -1) {
        // Update existing product
        products[existingProductIndex] = product;
    } else {
        // Add new product
        products.push(product);
    }

    displayProducts();
    clearForm();
}

function displayProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");
        productItem.innerHTML = `
      <p><strong>ID:</strong> ${product.id}</p>
      <p><strong>Name:</strong> ${product.name}</p>
      <p><strong>Type:</strong> ${product.type}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <button onclick="editProduct('${product.id}')">Edit</button>
      <button onclick="deleteProduct('${product.id}')">Delete</button>
    `;
        productList.appendChild(productItem);
    });
}

function clearForm() {
    document.getElementById("productId").value = "";
    document.getElementById("productName").value = "";
    document.getElementById("productType").value = "";
    document.getElementById("productPrice").value = "";
}

function deleteProduct(productId) {
    products = products.filter(product => product.id !== productId);
    displayProducts();
}

function editProduct(productId) {
    const product = products.find(product => product.id === productId);
    if (product) {
        document.getElementById("productId").value = product.id;
        document.getElementById("productName").value = product.name;
        document.getElementById("productType").value = product.type;
        document.getElementById("productPrice").value = product.price;
    }
}