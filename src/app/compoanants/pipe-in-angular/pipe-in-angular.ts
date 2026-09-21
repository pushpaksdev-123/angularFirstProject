import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../../pipes/na-pipe';

@Component({
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, JsonPipe, AsyncPipe,NaPipe],
  selector: 'app-pipe-in-angular',
  styleUrl: './pipe-in-angular.css',
  templateUrl: './pipe-in-angular.html',
})
export class PipeInAngular {

  firstName: string = "my Name is dev";

  currentDate: Date = new Date();

  currentTime : Observable<Date> = new Observable<Date>;


  student: any={
    Name : 'Pushpak',
    city: 'Nashik',
    emplyID: 123,
    state: ''
  };

  constructor(){
    this.currentTime=interval(1000).pipe(map(()=>new Date()));
  }
}
