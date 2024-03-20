import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Router, RouterOutlet} from "@angular/router";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {
  isOpen: boolean = true;

  constructor(private route: Router,private auth: AuthService) { }

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

  logout() {
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
