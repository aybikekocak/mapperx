import {Component} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  providers: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup
  buttonHovered: any;
  constructor(private authService: AuthService, private route: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl([], [Validators.required]),
      password: new FormControl([], [Validators.required]),
    })
    //email: a@gmail.com
    //password: AA123456
  }

  login() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      .then((userCredential) => {
        this.route.navigate(['/home/dashboard']);
        console.log("Kullanıcı başarıyla oturum açtı:", userCredential.user);
      })
      .catch((error) => {
        console.error("Oturum açma hatası:", error);
      });
  }


}
