import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Customer} from "../models/customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers = [
    new Customer(10, 'رامین', 'آرمانفر', new Date(), 'آلمان خیابان امام', '09371001'),
    new Customer(20, 'ابراهیم', 'لطفی', new Date(), 'شولیوند خیابان ایبو', '09371002'),
    new Customer(30, 'مریم', 'ضابط', new Date(), 'میاندوآب خیابان انصار', '09371003'),
    new Customer(40, 'افشین', 'پاشایی', new Date(), 'میاندوآب دانشگاه آزاد', '09371004'),
    new Customer(50, 'آسیه', 'ایزدی', new Date(), 'میاندوآب کوی معلم', '09371005')
  ];

  constructor() { }

  getAllCustomers(): Observable<Customer[]> {
    return of(this.customers);
  }
}
