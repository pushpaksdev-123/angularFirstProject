import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  selector: 'app-strucral-directive',
  styleUrls: ['./strucral-directive.css'],
  templateUrl: './strucral-directive.html',
})
export class StrucralDirective
 {
   isDiv1Visible: boolean = true;
   isDiv2Visible: boolean = false;

   num1: string = "";
   num2: string = "";

   isActive: boolean = false;
   selectedCountry: string = "";

   cityList: string[] = ["Pune", "Mumbai", "Nagpur", "Nashik", "Aurangabad"];

   constructor(private router: Router) { 

   }

   studentList: any[] = [
      { studID: 1, name: "Dev", rollNo: 101, city: "Pune" , isActive: true},
      { studID: 2, name: "Pushpak", rollNo: 102, city: "Mumbai" , isActive: false},
      { studID: 3, name: "Rohit", rollNo: 103, city: "Nagpur" , isActive: true},
      { studID: 4, name: "Ramesh", rollNo: 104, city: "Nashik" , isActive: false},
      { studID: 5, name: "Suresh", rollNo: 105, city: "Aurangabad" , isActive: true}


   ]

   showDiv1(): void {
     this.isDiv1Visible = true;
    }
    hideDiv1(): void {
     this.isDiv1Visible = false;
    }
    toggleDiv2(): void {
     this.isDiv2Visible = !this.isDiv2Visible;
    }

    navigateToAttributeDirective(): void {
      this.router.navigate(['/attribute-directive']);
    }
 }
