import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  imageUrlArray: string[] = ['../../../assets/images/slide-hello.jpg', '../../../assets/images/slide-circle.jpg', '../../../assets/images/slide-play.jpg']


  constructor() { }

  ngOnInit() {
  }

}
