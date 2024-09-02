import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Subscription, interval } from 'rxjs';
import * as Aos from 'aos';
@Component({
  selector: 'app-go-beauty-ar',

  templateUrl: './go-beauty-ar.component.html',
  styleUrls: ['./go-beauty-ar.component.css']
})
export class GoBeautyARComponent {
  items=[1,2,3]
  currentIndex = 0;
  visibleItems = 1; // Number of visible items per slide
  autoplayInterval: number = 3000; // Autoplay interval in milliseconds
  private autoplaySubscription?: Subscription;

  ngOnInit(): void {
    this.startAutoplay();
    initFlowbite();
    Aos.init();
  }

  ngOnDestroy(): void {
    if (this.autoplaySubscription) {
      this.autoplaySubscription.unsubscribe();
    }
  }

  startAutoplay() {
    this.autoplaySubscription = interval(this.autoplayInterval).subscribe(() => this.nextSlide());
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.items.length - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex < this.items.length - 1) ? this.currentIndex + 1 : 0;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
 toggle(){
  var nav= document.getElementsByTagName("nav")[0];
  var menu = document.getElementById('mobile-menu');

  
            if (menu?.classList.contains("hide")) {
              menu?.classList.add("show")
              menu?.classList.remove("hide")
                menu.animate({
                  height:'120px'
                },500)
               
               nav.style.marginBottom="120px"
              
            } else {
              menu?.classList.add("hide")
                menu?.classList.remove("show")
              menu?.animate({
                height:'00px'
              },500)
            
                nav.style.marginBottom="0px"
                
            }
 }
showcover(){
  const element = document.getElementById('cover');
  if (element) {
    element.style.display = "block";
  }


}
hidecover(){
  const element = document.getElementById('cover');
  if (element) {
    element.style.display = "none";
  }
}
}
