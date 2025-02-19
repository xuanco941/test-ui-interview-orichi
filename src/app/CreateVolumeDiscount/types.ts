export type VolumeDiscountRule = {
    Id: number;
    Title: string;
    Subtitle: string;
    Label?: string;
    Quantity: number;
    DiscountType: "None" | "% discount" | "Discount / each";
    Amount?: number;
}