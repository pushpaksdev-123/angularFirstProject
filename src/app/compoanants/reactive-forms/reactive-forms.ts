import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  selector: 'app-reactive-forms',
  styleUrls: ['./reactive-forms.css'],
  templateUrl: './reactive-forms.html',
})
export class ReactiveForms {

  studentForm = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(3)]), 
    lastName: new FormControl(),
    userName: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    zipCode: new FormControl(),
    isAcceptTerm: new FormControl(false)
  });

  formValue: any;
  onSubmit() {
       debugger;

    console.log('Submit button clicked');
    this.formValue = this.studentForm.value;
    console.log(this.formValue);
     

   
  }

}
