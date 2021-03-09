import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppMaterialsModule} from './app.materials-module';
import {NgxsModule} from "@ngxs/store";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";

import {AppState} from "./ngxs/app.state";

import {AppComponent} from './components/app-component/app.component';
import {CustomersListComponent} from './components/customers/customers-list/customers-list.component';
import {HomePageComponent} from './components/home/home-page/home-page.component';
import {HeaderComponent} from './components/common/header/header.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {PageNotFoundComponent} from './components/home/page-not-found/page-not-found.component';
import {environment} from "../environments/environment";
import {MatPaginatorIntl} from "@angular/material/paginator";
import {TranslatablePaginator} from "./shared/services/translatable-paginator";
import { CustomerDetailComponent } from './components/customers/customer-detail/customer-detail.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    HomePageComponent,
    HeaderComponent,
    PageNotFoundComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialsModule,
    NgxsModule.forRoot([AppState], {developmentMode: !environment.production}),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    TranslateService,
    {provide: MatPaginatorIntl, useClass: TranslatablePaginator},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
