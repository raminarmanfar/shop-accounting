import {Component, OnInit} from '@angular/core';
import {TextDirection} from "../../shared/models/enums/text-direction.enum";
import {TranslateService} from "@ngx-translate/core";
import {Language} from "../../shared/models/enums/language.enum";
import {UtilService} from "../../shared/services/util.service";
import {AppConfig} from "../../shared/models/app.config";
import {Select, Store} from "@ngxs/store";
import {AppState} from "../../ngxs/app.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  availableLanguages = AppConfig.availableLanguages;
  appTextDirection: TextDirection;
  @Select(AppState.getActiveLanguage) activeLanguage$: Observable<Language>;

  constructor(
    private translateService: TranslateService,
    private utilService: UtilService,
    private store: Store
  ) {
  }

  ngOnInit() {
    this.translateService.addLangs(this.availableLanguages);
    this.activeLanguage$.subscribe(activeLanguage => {
      this.translateService.setDefaultLang(activeLanguage);
      this.onLanguageChange(this.utilService.getDirection(activeLanguage));
    });
  }

  onLanguageChange(textDirection: TextDirection) {
      this.appTextDirection = textDirection;
  }
}
