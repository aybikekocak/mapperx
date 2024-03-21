import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

ngOnInit() {
  const limits: number = 4.0;
  const maxShadowOffset: number = 16;

  const cardElements = document.querySelectorAll(".card");

  const btn = document.querySelector('.mouse-cursor-gradient-tracking') as HTMLElement;

  btn.onmousemove = function(e) {
    const x = e.pageX - btn.offsetLeft - (btn.offsetParent as HTMLElement).offsetLeft;
    const y = e.pageY - btn.offsetTop - (btn.offsetParent as HTMLElement).offsetTop;
    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
  };

  cardElements.forEach((card: any) => {
    card.addEventListener("mousemove", (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; 
      const y = e.clientY - rect.top; 
      const offsetX = x / rect.width;
      const offsetY = y / rect.height;

      const rotateY = (offsetX * limits) - (limits / 2);
      const rotateX = (offsetY * limits) - (limits / 2);

      const shadowOffsetX = (offsetX * maxShadowOffset) - (maxShadowOffset / 2);
      const shadowOffsetY = (offsetY * maxShadowOffset) - (maxShadowOffset / 2);

      card.style.boxShadow =
          (1 / 6) * -shadowOffsetX +
          "px " +
          (1 / 6) * -shadowOffsetY +
          "px 3px rgba(0, 0, 0, 0.051), " +
          (2 / 6) * -shadowOffsetX +
          "px " +
          (2 / 6) * -shadowOffsetY +
          "px 7.2px rgba(0, 0, 0, 0.073), " +
          (3 / 6) * -shadowOffsetX +
          "px " +
          (3 / 6) * -shadowOffsetY +
          "px 13.6px rgba(0, 0, 0, 0.09), " +
          (4 / 6) * -shadowOffsetX +
          "px " +
          (4 / 6) * -shadowOffsetY +
          "px 24.3px rgba(0, 0, 0, 0.107), " +
          (5 / 6) * -shadowOffsetX +
          "px " +
          (5 / 6) * -shadowOffsetY +
          "px 45.5px rgba(0, 0, 0, 0.129), " +
          -shadowOffsetX +
          "px " +
          -shadowOffsetY +
          "px 109px rgba(0, 0, 0, 0.18)";
      card.style.transform =
          "perspective(1000px) rotateX(" + -rotateX + "deg) rotateY(" + rotateY + "deg)";

      const glarePos = rotateX + rotateY + 90;
      (card.querySelector(".glare") as HTMLElement).style.left = glarePos + "%";
    });

    card.addEventListener("mouseleave", (e: MouseEvent) => {
      card.style.boxShadow =
          "0px 0px 3px rgba(0, 0, 0, 0.051), 0px 0px 7.2px rgba(0, 0, 0, 0.073), 0px 0px 13.6px rgba(0, 0, 0, 0.09), 0px 0px 24.3px rgba(0, 0, 0, 0.107), 0px 0px 45.5px rgba(0, 0, 0, 0.129), 0px 0px 109px rgba(0, 0, 0, 0.18)";
      card.style.transform = "scale(1.0)";
      (card.querySelector(".glare") as HTMLElement).style.left = "100%";
    });
  });

}

}
