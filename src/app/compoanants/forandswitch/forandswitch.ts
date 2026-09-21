import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-forandswitch',
  styleUrl: './forandswitch.css',
  templateUrl: './forandswitch.html',
})
export class Forandswitch {

  dayNumber:string = "";
  cityList: string[] = ["Pune", "Mumbai", "Nagpur", "Nashik", "Aurangabad"];

  studentList: any[] = [
    { studID: 1, marks: 85, name: "Dev", rollNo: 101, gender: "Male", city: "Pune" , isActive: true},
    { studID: 5, marks: 30, name: "Pushpak", rollNo: 102, gender: "Female", city: "Mumbai" , isActive: false},
    { studID: 3, marks: 78, name: "Rohit", rollNo: 103, gender: "Male", city: "Nagpur" , isActive: true},
    { studID: 4, marks: 42, name: "Ramesh", rollNo: 104, gender: "Male", city: "Nashik" , isActive: false},
    { studID: 2, marks: 98, name: "Suresh", rollNo: 105, gender: "Male", city: "Aurangabad" , isActive: true}
  ]
}
