// Order Management System - Handles orders

import { Customer } from "./Customer";
import { Order } from "./Order";

class OrderManagementSystem {
    static main(): void {
        const customer = new Customer("John Doe", "VIP");
        const order = new Order(customer);

        order.addItem("Laptop", 1000);
        order.addItem("Mouse", 50);
        order.addItem("Keyboard", 80);

        order.printOrder();

        OrderManagementSystem.generateInvoice(order);
    }

    static generateInvoice(order: Order): void {
        console.log("Generating Invoice...");
        console.log(`Customer: ${order.customer.getName()}`);
        console.log(`Total: $${order.getTotalPrice()}`);
        console.log(`Discounted Total: $${order.getDiscountedPrice()}`);
        console.log(`Items: ${order.getItems().join(", ")}`);
        console.log("Thank you for shopping with us!");
    }
}

OrderManagementSystem.main();
