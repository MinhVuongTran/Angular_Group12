import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  images: any[] = [];

  constructor() {}

  ngOnInit() {
    this.images = [
      { url: 'assets/slideshow1.png', alt: 'Image 1' },
      { url: 'assets/slideshow2.png', alt: 'Image 2' },
      { url: 'assets/slideshow3.png', alt: 'Image 3' },
      { url: 'assets/slideshow4.png', alt: 'Image 4' },
      { url: 'assets/slideshow5.png', alt: 'Image 5' },
      { url: 'assets/shideshow6.png', alt: 'Image 6' },
      { url: 'assets/slideshow7.png', alt: 'Image 7' },
    ];
  }
}
