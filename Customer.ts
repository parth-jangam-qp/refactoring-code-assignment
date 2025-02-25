import { DiscountTypeEnum } from "./DiscountTypeEnum";

export class Customer {
    private name: string;
    private type: string; // "Regular", "Premium", "VIP"
    private discount: number;

    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
        this.setDiscount();
    }
    public getName(): string{
        return this.name
    }
    public getType(): string{
        return this.type
    }
    public getDiscount(): number{
        return this.discount
    }
    private setDiscount(): void {
        if (this.type === DiscountTypeEnum.REGULAR) {
            this.discount = 0.05;
        } else if (this.type === DiscountTypeEnum.PREMIUM) {
            this.discount = 0.1;
        } else if (this.type === DiscountTypeEnum.VIP) {
            this.discount = 0.2;
        } else {
            this.discount = 0;
        }
    }
}
