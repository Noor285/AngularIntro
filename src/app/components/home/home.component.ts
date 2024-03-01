import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Name: string = "Tourism Company";
  Img : string = "assets/images/holiday.jpg";
  Desc : string = "Some quick example text to build on the card title and make up the bulk of the card's content.";
  mycolor : string = "red";
}
