import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
logoPath : string = "";
welcomeMessage: string = "Welcome to Stock Trading World";

/**
 *
 */
constructor() {
  
  
}
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }

}
