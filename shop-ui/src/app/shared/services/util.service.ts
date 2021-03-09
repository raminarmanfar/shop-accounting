import {HostListener, Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Language} from "../models/enums/language.enum";
import {TextDirection} from "../models/enums/text-direction.enum";
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {AppState} from "../../ngxs/app.state";
import {TextAlignment} from "../models/enums/text-alignment.enum";
import {map} from "rxjs/operators";
import {SwitchActiveLanguage} from "../../ngxs/app.action";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  @Select(AppState.getActiveLanguage) activeLanguage$: Observable<Language>;

  get activeLanguage(): Observable<Language> {
    return this.activeLanguage$;
  }

  constructor(
    private store: Store,
    private snackBar: MatSnackBar,
    private translateService: TranslateService) {
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event?) {
    return {
      screenHeight: window.innerHeight,
      screenWidth: window.innerWidth
    };
  }

  openSnackBar(message: string, action: string, duration: number = 2000): void {
    this.snackBar.open(message, action, {
      duration,
    });
  }

  switchActiveLanguage() {
    this.store.dispatch(new SwitchActiveLanguage());
    this.activeLanguage$.subscribe(activeLanguage =>
      this.translateService.use(activeLanguage)
    );
  }

  public getDirection(): Observable<TextDirection> {
    return this.activeLanguage$.pipe(
      map(activeLanguage => {
        switch (activeLanguage) {
          case Language.EN:
            return TextDirection.LTR;
            break;
          case Language.FA:
            return TextDirection.RTL;
            break;
          default:
            return TextDirection.LTR;
        }
      })
    );
  }

  public getTextAlignment(): Observable<TextAlignment> {
    return this.activeLanguage$.pipe(
      map(activeLanguage => {
        switch (activeLanguage) {
          case Language.EN:
            return TextAlignment.LEFT;
            break;
          case Language.FA:
            return TextAlignment.RIGHT;
            break;
          default:
            return TextAlignment.LEFT;
        }
      })
    );
  }
}
