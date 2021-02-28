import {Component, OnInit} from '@angular/core';
import {TextDirection} from "../../shared/models/enums/text-direction.enum";
import {TranslateService} from "@ngx-translate/core";
import {Language} from "../../shared/models/enums/language.enum";
import {UtilService} from "../../shared/services/util.service";
import {AppConfig} from "../../shared/models/app.config";
import {Select, Store} from "@ngxs/store";
import {GetActiveLanguage, SwitchActiveLanguage} from "../../ngxs/app.action";
import {AppState} from "../../ngxs/app.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  availableLanguages = AppConfig.availableLanguages;
  appDirection: TextDirection;
  @Select(AppState.getActiveLanguage) activeLanguage$: Observable<Language>;

  constructor(
    private translateService: TranslateService,
    private utilService: UtilService,
    private store: Store
  ) {
  }

  async ngOnInit() {
    this.translateService.addLangs(this.availableLanguages);
    this.store.dispatch(new GetActiveLanguage());
    const activeLanguage = await this.activeLanguage$.toPromise();
    this.translateService.setDefaultLang(activeLanguage);
    this.onLanguageChange();
  }

  onLanguageChange() {
    this.store.dispatch(new GetActiveLanguage());
    this.activeLanguage$.subscribe(activeLanguage => {
      this.translateService.use(activeLanguage);
      this.appDirection = this.utilService.getDirection(activeLanguage);
    });

  }
}
