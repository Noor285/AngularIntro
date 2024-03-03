import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  imagesUrls: string[] = ['assets/images/bg.jpg', 'assets/images/bg2.jpg', 'assets/images/bg3.jpg'];
  currentImage: string = this.imagesUrls[0];
  intervalId: any;
  counter:number = 0;
  previous(){
    this.counter--;
    if (this.counter < 0) this.counter = this.imagesUrls.length - 1;
    this.currentImage = this.imagesUrls[this.counter];
  }
  next(){
    this.counter++;
    if(this.counter == this.imagesUrls.length) this.counter = 0;
    this.currentImage = this.imagesUrls[this.counter];

  }

  play(){
    this.intervalId = setInterval(()=>{
      this.next();
    }, 2000);
  }

  stop(){
    clearInterval(this.intervalId);
  }

}
