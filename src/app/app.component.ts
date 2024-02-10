import { Component } from '@angular/core';
import {TimeService} from './zone/time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atm';
  times:any;
  constructor(private time:TimeService){
    this.time.getData().subscribe(data=>{
      this.times=data;
      console.log(data)
    });
  }
}
