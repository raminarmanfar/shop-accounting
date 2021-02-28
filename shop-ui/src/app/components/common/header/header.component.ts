import {Component, EventEmitter, Output} from '@angular/core';
import {Language} from "../../../shared/models/enums/language.enum";
import {UtilService} from "../../../shared/services/util.service";
import {Select, Store} from "@ngxs/store";
import {SwitchActiveLanguage} from "../../../ngxs/app.action";
import {AppState} from "../../../ngxs/app.state";
import {Observable} from "rxjs";
import {TranslateService} from "@ngx-translate/core";
import {TextDirection} from "../../../shared/models/enums/text-direction.enum";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() changeTextDirection = new EventEmitter<TextDirection>();
  @Select(AppState.getActiveLanguage) activeLanguage$: Observable<Language>;
  @Select(AppState.getNextLanguage) nextLanguage$: Observable<Language>;

  constructor(
    private translateService: TranslateService,
    private utilService: UtilService,
    private store: Store) {
  }

  changeLanguage() {
    this.store.dispatch(new SwitchActiveLanguage());
    this.activeLanguage$.subscribe(activeLanguage => {
      this.translateService.use(activeLanguage);
      this.utilService.getDirection()
        .subscribe(direction => this.changeTextDirection.emit(direction));
    });
  }
}
