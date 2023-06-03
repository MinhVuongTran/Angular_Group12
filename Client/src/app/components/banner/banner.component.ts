import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  BannerSlide = [
    { url: 'assets/banner_shildeshow1.png', alt: 'Image 1' },
    { url: 'assets/banner_shildeshow2.png', alt: 'Image 2' },
    { url: 'assets/banner_shildeshow1.png', alt: 'Image 1' },
    { url: 'assets/banner_shildeshow2.png', alt: 'Image 2' },
    
  ];
}
