import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule,FormsModule,RouterLink],
  selector: 'app-attribute-directive',
  styleUrl: './attribute-directive.css',
  templateUrl: './attribute-directive.html',
})
export class AttributeDirective {

  div1BgColor: string = "bg-primary";
  div2BgColor: string = "bg-success";

  num1: string = "";
  num2: string = "";

  isActive: boolean = false

  studentList: any[] = [
    { studID: 1, marks: 85, name: "Dev", rollNo: 101, gender: "Male", city: "Pune" , isActive: true},
    { studID: 2, marks: 30, name: "Pushpak", rollNo: 102, gender: "Female", city: "Mumbai" , isActive: false},
    { studID: 3, marks: 78, name: "Rohit", rollNo: 103, gender: "Male", city: "Nagpur" , isActive: true},
    { studID: 4, marks: 42, name: "Ramesh", rollNo: 104, gender: "Male", city: "Nashik" , isActive: false},
    { studID: 5, marks: 98, name: "Suresh", rollNo: 105, gender: "Male", city: "Aurangabad" , isActive: true}
  ]

  AddRedClass(){
    this.div1BgColor = "bg-danger";
  }
  AddBlueClass() {
    this.div1BgColor = "bg-primary";
  }

  AddToggleClass() {
    this.div2BgColor = this.div2BgColor === 'bg-danger' ? 'bg-success' : 'bg-danger';
  }

}
