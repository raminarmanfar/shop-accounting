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
  @Select(AppState.getActiveLanguage) activeLanguage$: Observable<Language>;
  @Select(AppState.getNextLanguage) nextLanguage$: Observable<Language>;

  constructor(private utilService: UtilService) {
  }

  changeLanguage() {
    this.utilService.switchActiveLanguage();
  }
}
