import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Customer} from "../models/customer.model";
import {CustomerService} from "../services/customer.service";
import {GetCustomers} from "./app.action";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

export class ShopStateModel {
  constructor(public customers: Customer[], public areCustomersLoaded: boolean) {
  }
}

@State<ShopStateModel>({
  name: 'shop',
  defaults: {
    customers: [],
    areCustomersLoaded: false,
  },
})
@Injectable()
export class ShopState {
  constructor(private customerService: CustomerService, private router: Router) {
  }

  @Selector()
  static getCustomersList(state: ShopStateModel): Customer[] {
    return state.customers;
  }

  @Selector()
  static areLoaded(state: ShopStateModel): boolean {
    return state.areCustomersLoaded;
  }

  @Action(GetCustomers)
  getCourses({getState, setState}: StateContext<ShopStateModel>): Observable<Customer[]> {
    return this.customerService.getAllCustomers().pipe(
      tap((customers: Customer[]) => {
        const state = getState();
        setState({
          ...state,
          customers: customers,
          areCustomersLoaded: true
        })
      })
    );
  }
}
