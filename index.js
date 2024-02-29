const shoppingCart = {
    items: [],
    total: 0,
    discount: 0,
  
    // Метод добавления товара
    addItem(name, price, quantity) {
      const newItem = { name, price, quantity };
      this.items.push(newItem);
      this.total += price * quantity;
    },
  
    // Метод удаления товара
    removeItem(name) {
      const index = this.items.findIndex(item => item.name === name);
      if (index !== -1) {
        const { price, quantity } = this.items[index];
        this.items.splice(index, 1);
        this.total -= price * quantity;
      }
    },
  
    // Метод обновления количества товара
    updateQuantity(name, newQuantity) {
      const item = this.items.find(item => item.name === name);
      if (item) {
        const priceDifference = item.price * (newQuantity - item.quantity);
        item.quantity = newQuantity;
        this.total += priceDifference;
      }
    },
  
    // Метод расчета общей стоимости
    calculateTotal() {
      this.total = this.items.reduce((acc, item) => acc + item.price * item.quantity * (1 - this.discount / 100), 0);
      console.log(this.total.toFixed(2))
    },
  
    // Метод очистки корзины
    clearCart() {
      this.items = [];
      this.total = 0;
      this.discount = 0
    },
  
    // Метод применения скидки
    applyDiscount(discount) {
      this.discount = discount
    }
  };
  
// Примеры
shoppingCart.addItem('Джинсы', 100, 2); // Добавление товара
shoppingCart.addItem('Рубашка', 250, 1);
shoppingCart.calculateTotal(); // Выведет: 450

shoppingCart.updateQuantity('Джинсы', 3); // Изменение количества товара
shoppingCart.calculateTotal(); // Выведет: 550

shoppingCart.applyDiscount(10) // Добавление скидки
shoppingCart.calculateTotal(); // Выведет: 495

shoppingCart.removeItem('Джинсы'); // Удаление товара
shoppingCart.calculateTotal(); // Выведет: 250

shoppingCart.clearCart(); // Очистка корзины
shoppingCart.calculateTotal(); // 0
  