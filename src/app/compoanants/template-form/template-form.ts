import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule,JsonPipe],
  selector: 'app-template-form',
  styleUrl: './template-form.css',
  templateUrl: './template-form.html',
})
export class TemplateForm {

studentObj: any ={
  firstName: "",
  lastName:"",
  userNamw:"",
  city:"",
  state:"",
  zipCode:"",
  isAcceptTerm: false
  
};

formValue: any;
onSubmit(){
 this.formValue = this.studentObj;
}
resetForm (){
  this.studentObj={
     firstName: "",
  lastName:"",
  userNamw:"",
  city:"",
  state:"",
  zipCode:"",
  isAcceptTerm: false
  }
}

}
