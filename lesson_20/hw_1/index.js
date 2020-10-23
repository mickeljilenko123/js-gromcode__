class Order {
    constructor(price, city, type) {
        this.id = String(Math.random());
        this.price = price;
        this.dateCreated = new Date();
        this.isConfirmed = false;
        this.dateConfirmed = new Date();
        this.city = String(city);
        this.type = String(type);
    }
    checkPrice() {
        if (this.price > 1000) {
            return true;
        }
        return false;
    }
    confirmOrder() {
        if (this.isConfirmed === false) {
            this.isConfirmed = true;
            this.dateConfirmed = new Date();
            return;
        }
    }
    isValidType() {
        if (Buy) {
            return true;
        }
        if (Sell) {
            return false;
        }
    }
}
export { Order }