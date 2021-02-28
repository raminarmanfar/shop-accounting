import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Language} from "../models/enums/language.enum";
import {TextDirection} from "../models/enums/text-direction.enum";
import {Select} from "@ngxs/store";
import {Observable} from "rxjs";
import {AppState} from "../../ngxs/app.state";

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


  openSnackBar(message: string, action: string, duration: number = 2000): void {
    this.snackBar.open(message, action, {
      duration,
    });
  }

  public getDirection(language: Language): TextDirection {
    switch (language) {
      case Language.EN: return  TextDirection.LTR; break;
      case Language.FA: return  TextDirection.RTL; break;
      default: return TextDirection.LTR;
    }
  }
}
