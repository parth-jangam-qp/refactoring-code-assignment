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
        switch (this.type) {
            case DiscountTypeEnum.REGULAR:
                this.discount = 0.05;    
                break;
            case DiscountTypeEnum.PREMIUM:
                this.discount = 0.1;
                break;
            case DiscountTypeEnum.VIP:
                this.discount = 0.2;   
                break
            default:
                this.discount = 0;
                break;
        }
        
    }
}
