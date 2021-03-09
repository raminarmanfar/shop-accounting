import {Component, OnInit} from '@angular/core';
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

  constructor(
    private translateService: TranslateService,
    public utilService: UtilService,
  ) {
    this.utilService.activeLanguage
  }

  ngOnInit() {
    this.translateService.addLangs(this.availableLanguages);
    this.utilService.activeLanguage$.subscribe(activeLanguage => {
      this.translateService.setDefaultLang(activeLanguage);
    });
  }
}
