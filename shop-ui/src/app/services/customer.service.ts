import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Customer} from "../models/customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers = [
    new Customer(10, 'بهروز', 'ولیزاده', new Date(), 'شیراز خیابان بهار', '09393003', 'خیابان شهید قندی', '061256872', '062014786','ایشان مشتری بامرامی هستند.'),
    new Customer(20, 'رامین', 'آرمانفر', new Date(), 'آلمان خیابان امام', '09381001', 'خیابان شهید بروسلی', '044453001', '044454001','ایشان مشتری ولخرجی هستند.'),
    new Customer(30, 'ابراهیم', 'لطفی', new Date(), 'شولیوند خیابان ایبو', '09141002', null, null, null, 'ایشان بسیار بدقول و بد حساب هستند.'),
    new Customer(40, 'مریم', 'ضابط', new Date(), 'میاندوآب خیابان انصار', '09371003', null, null, null, 'ایشان مشتری معمولی هستند.'),
    new Customer(50, 'افشین', 'پاشایی', new Date(), 'میاندوآب دانشگاه آزاد', '09351004'),
    new Customer(60, 'آسیه', 'ایزدی', new Date(), 'میاندوآب کوی معلم', '09371005', null, null, null, 'توضیحی ندارد.'),
    new Customer(70, 'یاسر', 'نیکخو', new Date(), 'ارومیه بلوار امامت', '09382002', null, null, null, 'توضیحی ندارد.'),
    new Customer(80, 'بهنام', 'علیزاده', new Date(), 'تبریز اتوبان پاسداران خیابان آبرسان', '09144142536', null, null, null, 'پسر خوبی هست.')
  ];

  constructor() { }

  getAllCustomers(): Observable<Customer[]> {
    return of(this.customers);
  }
}
