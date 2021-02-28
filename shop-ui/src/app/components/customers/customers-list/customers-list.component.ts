import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {Select, Store} from "@ngxs/store";
import {GetCustomers} from "../../../ngxs/app.action";
import {Observable, Subscription} from "rxjs";
import {AppState} from "../../../ngxs/app.state";
import {tap} from "rxjs/operators";
import {Customer} from "../../../models/customer.model";

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit, AfterViewInit {
  @Select(AppState.areCustomerLoaded) areCustomersLoaded$!: Observable<boolean>;
  @Select(AppState.getCustomersList) customers$!: Observable<Customer[]>;

  areCustomersLoadedSub: Subscription;

  displayedColumns: string[] = ['customerFullName', 'cellPhone', 'homeAddress', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.areCustomersLoadedSub = this.areCustomersLoaded$
      .pipe(
        tap(areCustomersLoaded => {
          if (!areCustomersLoaded) {
            this.store.dispatch(new GetCustomers());
          }
        })
      )
      .subscribe(loaded => console.info('>>>customers loaded:', loaded));
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
