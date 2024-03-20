import {Inject, Injectable} from '@angular/core';
import {Auth} from '@angular/fire/auth';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseAuth = Inject(Auth)

  constructor(private afAuth: AngularFireAuth) { }

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.signOut();
  }

}
