export interface Menu{
    name: string;
    route: string;
}

export interface Cart{
    id:string,
    name: string;
    unit: string;
    price: number;
    quantity:number;
    total:number;
}