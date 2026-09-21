import { Component, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  imports: [FormsModule],
  selector: 'app-dada-binding-componant',
  styleUrl: './dada-binding-componant.css',
  templateUrl: './dada-binding-componant.html',
})
export class DadaBindingComponant {

  courseName: string = "Angular-18";
  inputType = "checkbox";
  stateName: string = "Maharashtra";
  myClassName: string = "bg-primary";
  rollNo: number = 101;
  isIndian: boolean = false;
  currentDate: Date = new Date();

  firstName= signal("Dev");

  constructor() {
  }

  changeCourseName(): void {
    this.courseName = "Angular-19";
    this.firstName.set("Pushpak");
  }
  showAlert(message: string): void {
    alert(message);
  }
}
