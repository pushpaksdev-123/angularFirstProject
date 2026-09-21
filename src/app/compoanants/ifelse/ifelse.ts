import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-ifelse',
  styleUrl: './ifelse.css',
  templateUrl: './ifelse.html',
})
export class Ifelse {

   isDiv1Visible: boolean = true;
   isWarningVisible: boolean = false;

  num1: string = '';
  num2: string = '';

  selectedStatus: string = '';

  showDiv1(): void {
    this.isDiv1Visible = true;
  }

  hideDiv1(): void {
    this.isDiv1Visible = false;
  }
  toggleDiv2(): void {
    this.isWarningVisible = !this.isWarningVisible;
  }

}
