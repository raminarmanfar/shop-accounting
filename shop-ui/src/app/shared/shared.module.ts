import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {InputComponent} from './components/input/input.component';
import {ConfirmationPopupComponent} from './components/confirmation-popup/confirmation-popup.component';
import {AppMaterialsModule} from '../app.materials-module';

@NgModule({
  declarations: [InputComponent, ConfirmationPopupComponent],
  exports: [
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppMaterialsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
