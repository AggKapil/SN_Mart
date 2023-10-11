import { DatePipe } from "@angular/common";

export interface Menu {
    name: string;
    route: string;
}

export interface SideBarMenu {
    numberId: number;
    name: string;
    route: string;
    icon: string;
}

export interface Cart {
    CId: string,
    cName: string;
    cCategory: string,
    cBrand: string,
    cUnit: string;
    cPrice: number;
    cQuantity: number;
    cTotal: number;
}

export interface User {
    billNo: string,
    date: Date,
    user: string,
    paymentMode: string,
    orderHistory: Cart[],

    // paid:number,
    totalAmount: number
}   