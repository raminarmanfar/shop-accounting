import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Customer} from "../models/customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers = [
    new Customer(10, 'رامین', 'آرمانفر', new Date(), 'آلمان خیابان امام', '09371001', null, null, null,'ایشان مشتری ولخرجی هستند.'),
    new Customer(20, 'ابراهیم', 'لطفی', new Date(), 'شولیوند خیابان ایبو', '09371002', null, null, null, 'ایشان بسیار بدقول و بد حساب هستند.'),
    new Customer(30, 'مریم', 'ضابط', new Date(), 'میاندوآب خیابان انصار', '09371003', null, null, null, 'ایشان مشتری معمولی هستند.'),
    new Customer(40, 'افشین', 'پاشایی', new Date(), 'میاندوآب دانشگاه آزاد', '09371004'),
    new Customer(50, 'آسیه', 'ایزدی', new Date(), 'میاندوآب کوی معلم', '09371005', null, null, null, 'توضیحی ندارد.')
  ];

  constructor() { }

  getAllCustomers(): Observable<Customer[]> {
    return of(this.customers);
  }
}
