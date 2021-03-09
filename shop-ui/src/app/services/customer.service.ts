import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Customer} from "../models/customer.model";
import {HttpClient} from "@angular/common/http";
import {UtilService} from "../shared/services/util.service";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('/api/customers/');
  }
}
