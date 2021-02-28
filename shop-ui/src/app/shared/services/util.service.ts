import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Language} from "../models/enums/language.enum";
import {TextDirection} from "../models/enums/text-direction.enum";

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private snackBar: MatSnackBar) {
  }

  openSnackBar(message: string, action: string, duration: number = 2000): void {
    this.snackBar.open(message, action, {
      duration,
    });
  }

  public getNextLanguage(currentLanguage: Language): Language {
    switch (currentLanguage) {
      case Language.EN: return Language.FA; break;
      case Language.FA: return Language.EN; break;
      default: return Language.EN;
    }
  }

  public getDirection(language: Language): TextDirection {
    switch (language) {
      case Language.EN: return  TextDirection.LTR; break;
      case Language.FA: return  TextDirection.RTL; break;
      default: return TextDirection.LTR;
    }
  }
}
