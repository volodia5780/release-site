        let cart = [];
        function addToCart(game, price) {
            cart.push({ game, price });
            updateCart();
        }
        function updateCart() {
            let cartList = document.getElementById("cart-items");
            let totalPrice = 0;
            cartList.innerHTML = "";
            cart.forEach((item, index) => {
                totalPrice += item.price;
                let listItem = document.createElement("li");
                listItem.textContent = `${item.game} - $${item.price}`;
                let removeButton = document.createElement("button");
                removeButton.textContent = "Remove";
                removeButton.onclick = function () { removeFromCart(index); };
                listItem.appendChild(removeButton);
                cartList.appendChild(listItem);
            });
            document.getElementById("total-price").textContent = `Total: $${totalPrice}`;
        }
        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCart();
        }
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll(".buy-button").forEach(button => {
                button.addEventListener("click", function () {
                    let game = this.getAttribute("data-game");
                    let price = parseFloat(this.getAttribute("data-price"));
                    addToCart(game, price);
                });
            });
        });
