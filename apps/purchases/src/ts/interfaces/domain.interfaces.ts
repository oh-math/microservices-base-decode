export interface CustomerProps {
    name: string;
    email: string;
  }
  
export interface ProductProps {
    title: string;
}
  
export interface PurchaseProps {
    customerId: string;
    productId: string; 
    createdAt: Date;
}
  