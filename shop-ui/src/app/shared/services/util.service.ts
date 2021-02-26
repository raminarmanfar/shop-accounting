import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

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
}
