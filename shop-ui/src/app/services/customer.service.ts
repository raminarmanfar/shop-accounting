import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Customer} from "../models/customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers = [
    new Customer(10, 'Ramin', 'Armanfar', new Date(), 'home-address-ramin', '09371001'),
    new Customer(20, 'Amin', 'Armanfar', new Date(), 'home-address-amin', '09371002'),
    new Customer(30, 'Roya', 'Armanfar', new Date(), 'home-address-roya', '09371003'),
    new Customer(40, 'Hossein', 'Abddol', new Date(), 'home-address-hossein', '09371004'),
    new Customer(50, 'Asiyeh', 'Izadi', new Date(), 'home-address-asiyeh', '09371005')
  ];

  constructor() { }

  getAllCustomers(): Observable<Customer[]> {
    return of(this.customers);
  }
}
