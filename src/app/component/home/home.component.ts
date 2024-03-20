import { Component } from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {PanelComponent} from "../panel/panel.component";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        RouterOutlet,
        PanelComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private auth: AuthService,private route: Router) {
  }
  dashboard(){
    this.route.navigate(['/home/dashboard'])
  }
  items(){
    this.route.navigate(['/home/items'])
  }
  userSettings(){
    this.route.navigate(['/home/user-settings'])
  }
  admin(){
    this.route.navigate(['/home/admin'])
  }
  logout(){
    this.auth.logout()
      .then(() => {
        this.route.navigate(['/login'])
        console.log("Çıkış Yapıldı");
      })
      .catch((error) => {
        console.error("Oturum kapama hatası:", error);
      });
  }
}
