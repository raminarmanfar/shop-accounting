import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Customer} from "../models/customer.model";
import {CustomerService} from "../services/customer.service";
import {GetCustomers, SetActiveLanguage, SwitchActiveLanguage} from "./app.action";
import {Observable, of} from "rxjs";
import {map, tap} from "rxjs/operators";
import {Language} from "../shared/models/enums/language.enum";

export class AppStateModel {
  constructor(
    public activeLanguage: Language,
    public customers: Customer[],
    public areCustomersLoaded: boolean
  ) {
  }
}

@State<AppStateModel>({
  name: 'shop',
  defaults: {
    activeLanguage: Language.FA,
    customers: [],
    areCustomersLoaded: false,
  },
})
@Injectable()
export class AppState {
  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {
  }

  @Selector()
  static getActiveLanguage(state: AppStateModel): Language {
    return state.activeLanguage;
  }

  @Selector()
  static getNextLanguage(state: AppStateModel): Language {
    return state.activeLanguage === Language.EN ? Language.FA : Language.EN;
  }
  @Selector()
  static getCustomersList(state: AppStateModel): Customer[] {
    return state.customers;
  }

  @Selector()
  static areCustomerLoaded(state: AppStateModel): boolean {
    return state.areCustomersLoaded;
  }

  @Action(SwitchActiveLanguage)
  switchActiveLanguage({getState, setState}: StateContext<AppStateModel>): Observable<Language> {
    return of(getState()).pipe(
      map(currentState => {
        setState({
          ...currentState,
          activeLanguage: AppState.getNextLanguage(currentState)
        })
        return currentState.activeLanguage;
      })
    );
  }

  @Action(SetActiveLanguage)
  setActiveLanguage(
    {getState, setState}: StateContext<AppStateModel>,
    {payload}: SetActiveLanguage): Observable<Language> {
    return of(getState()).pipe(
      map(currentState => {
        setState({
          ...currentState,
          activeLanguage: payload
        });
        return currentState.activeLanguage;
      })
    );
  }

  @Action(GetCustomers)
  getCustomers({getState, setState}: StateContext<AppStateModel>): Observable<Customer[]> {
    return this.customerService.getAllCustomers().pipe(
      tap((customers: Customer[]) => {
        const state = getState();
        setState({
          ...state,
          customers: customers,
          areCustomersLoaded: true
        });
      })
    );
  }
}
