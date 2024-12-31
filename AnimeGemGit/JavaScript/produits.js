document.addEventListener("DOMContentLoaded", () => {
    // Fonction pour ajouter au panier
    function addToCart(event) {
        // Récupération des informations du produit à partir des attributs du bouton
        const button = event.target;
        const productId = button.getAttribute('data-id');
        const productName = button.getAttribute('data-name');
        const productPrice = button.getAttribute('data-price');

        // Créer un objet produit
        const product = {
            id: productId,
            name: productName,
            price: parseFloat(productPrice),
            quantity: 1
        };

        // Vérification si le produit est déjà dans le panier
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        if (existingProductIndex !== -1) {
            // Si le produit est déjà dans le panier, augmenter la quantité
            cart[existingProductIndex].quantity += 1;
        } else {
            // Si le produit n'est pas dans le panier, l'ajouter
            cart.push(product);
        }

        // Sauvegarder le panier dans localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${product.name} a été ajouté au panier !`);
    }

    // Attacher l'événement "Ajouter au panier" à chaque bouton
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
});
