import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomersListComponent} from "./components/customers/customers-list/customers-list.component";
import {HomePageComponent} from "./components/home/home-page/home-page.component";
import {PageNotFoundComponent} from "./components/home/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', redirectTo: '/home-page', pathMatch: 'full'},
  {path: 'home-page', component: HomePageComponent},
  {path: 'customers-list', component: CustomersListComponent},
  {path: '**', redirectTo: '/404'},
  {path: '404', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
