import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Language} from "../models/enums/language.enum";
import {TextDirection} from "../models/enums/text-direction.enum";
import {Select} from "@ngxs/store";
import {Observable} from "rxjs";
import {AppState} from "../../ngxs/app.state";
import {TextAlignment} from "../models/enums/text-alignment.enum";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  @Select(AppState.getActiveLanguage) activeLanguage$: Observable<Language>;

  get activeLanguage(): Observable<Language> {
    return this.activeLanguage$;
  }

  constructor(private snackBar: MatSnackBar) {
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  openSnackBar(message: string, action: string, duration: number = 2000): void {
    this.snackBar.open(message, action, {
      duration,
    });
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
