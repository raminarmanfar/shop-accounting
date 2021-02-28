import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Language} from "../../../shared/models/enums/language.enum";
import {UtilService} from "../../../shared/services/util.service";
import {Select, Store} from "@ngxs/store";
import {SwitchActiveLanguage} from "../../../ngxs/app.action";
import {AppState} from "../../../ngxs/app.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() changeLang = new EventEmitter<Language>();
  @Select(AppState.getActiveLanguage) activeLanguage$: Observable<Language>;

  constructor(
    private utilService: UtilService,
    private store: Store) {
  }

  changeLanguage() {
    this.store.dispatch(new SwitchActiveLanguage());
    this.changeLang.emit();
  }
}
