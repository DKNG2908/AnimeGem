document.addEventListener('DOMContentLoaded', function() {
    // Vérification de la récupération du panier dans le localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Sélection des éléments HTML où afficher les produits
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Vérification si le conteneur existe
    if (!cartItemsContainer || !totalPriceElement) {
        console.error('Le conteneur pour les articles du panier ou le total n\'a pas été trouvé.');
        return;
    }

    // Fonction pour afficher les produits dans le panier
    function displayCartItems() {
        // Si le panier est vide, afficher un message
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Votre panier est vide.</p>';
            totalPriceElement.innerHTML = 'Total : 0 €';
            return;
        }

        // Effacer les anciens éléments du panier
        cartItemsContainer.innerHTML = '';

        // Calculer le total du panier
        let totalPrice = 0;

        // Ajouter chaque produit au panier
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <p>${item.name} - ${item.price} €</p>
                <button class="remove-item" data-id="${item.id}">Supprimer</button>
            `;
            cartItemsContainer.appendChild(itemElement);

            // Additionner le prix pour le total
            totalPrice += item.price;
        });

        // Mettre à jour le total
        totalPriceElement.innerHTML = `Total : ${totalPrice.toFixed(2)} €`;

        // Ajouter les événements pour supprimer les articles
        const removeButtons = document.querySelectorAll('.remove-item');
        removeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const itemId = this.getAttribute('data-id');
                removeItemFromCart(itemId);
            });
        });
    }

    // Fonction pour supprimer un produit du panier
    function removeItemFromCart(itemId) {
        // Retirer l'élément avec l'ID correspondant
        cart = cart.filter(item => item.id !== itemId);

        // Mettre à jour le localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Réafficher le panier avec les articles restants
        displayCartItems();
    }

    // Afficher le panier
    displayCartItems();
});
