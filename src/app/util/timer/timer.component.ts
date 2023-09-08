import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  currentTime : Date;
  timeLeft: number = 60;
  //interval : any;
  /**
   *
   */
  constructor() {
    this.currentTime = new Date();
     setInterval(() => {
      this.currentTime = new Date();
    },1000)
  }

  ngOnInit(): void {
     
  }

  

}
