import {Component, OnInit} from '@angular/core';
import {TextDirection} from "../../shared/models/enums/text-direction.enum";
import {TranslateService} from "@ngx-translate/core";
import {UtilService} from "../../shared/services/util.service";
import {AppConfig} from "../../shared/models/app.config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  availableLanguages = AppConfig.availableLanguages;
  appTextDirection: TextDirection;

  constructor(
    private translateService: TranslateService,
    private utilService: UtilService,
  ) {
  }

  ngOnInit() {
    this.translateService.addLangs(this.availableLanguages);
    this.utilService.activeLanguage$.subscribe(activeLanguage => {
      this.translateService.setDefaultLang(activeLanguage);
      this.utilService.getDirection()
        .subscribe(direction => this.onLanguageChange(direction));
    });
  }

  onLanguageChange(textDirection: TextDirection) {
    this.appTextDirection = textDirection;
  }
}
