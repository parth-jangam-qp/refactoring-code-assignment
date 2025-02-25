import { Customer } from "./Customer";

export class Order {
    customer: Customer;
    private items: string[];
    private prices: number[];
    private totalPrice: number;
    private discountedPrice: number;

    constructor(customer: Customer) {
        this.customer = customer;
        this.items = [];
        this.prices = [];
        this.totalPrice = 0;
        this.discountedPrice = 0;
        
    }
    public getItems(): string[]{
        return this.items
    }
    public getPrices(): number[]
    {
        return this.prices
    }
    public getTotalPrice(): number{
        return this.totalPrice
    }
    public getDiscountedPrice(): number{
        return this.discountedPrice
    }
    public addItem(item: string, price: number): void {
        this.items.push(item);
        this.prices.push(price);
        this.calculateTotal();
    }

    private calculateTotal(): void {
        this.totalPrice = this.prices.reduce((sum, price) => sum + price, 0);
        this.applyDiscount();
    }

    private applyDiscount(): void {
        this.discountedPrice = this.totalPrice - (this.totalPrice * this.customer.getDiscount());
    }

    public printOrder(): void {
        console.log(`Customer: ${this.customer.getName()}`);
        console.log(`Items: ${this.items.join(", ")}`);
        console.log(`Total Price: ${this.totalPrice}`);
        console.log(`Discounted Price: ${this.discountedPrice}`);
    }
}
