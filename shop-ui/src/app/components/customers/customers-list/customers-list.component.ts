import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {Select, Store} from "@ngxs/store";
import {GetCustomers} from "../../../ngxs/app.action";
import {Observable, Subscription} from "rxjs";
import {AppState} from "../../../ngxs/app.state";
import {tap} from "rxjs/operators";
import {Customer} from "../../../models/customer.model";
import {UtilService} from "../../../shared/services/util.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CustomersListComponent implements OnInit, AfterViewInit {
  @Select(AppState.areCustomerLoaded) areCustomersLoaded$!: Observable<boolean>;
  @Select(AppState.getCustomersList) customers$!: Observable<Customer[]>;

  areCustomersLoadedSub: Subscription;

  displayedColumns: string[] = ['customerName', 'customerSurname', 'homeAddress', 'cellPhone', 'actions'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  textAlignment$ = this.utilService.getTextAlignment();
  expandedElement: Customer | null;

  constructor(
    private store: Store,
    private utilService: UtilService
  ) {
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
    this.customers$
      .subscribe(customers => this.dataSource = new MatTableDataSource<Customer>(customers));
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
