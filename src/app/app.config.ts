import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {initializeApp} from "firebase/app";
import {provideHttpClient} from '@angular/common/http';
import {provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth'
import {environment} from "../enviroment/enviroment";
import {AngularFireModule} from "@angular/fire/compat";
import {provideAnimations} from "@angular/platform-browser/animations";


export const appConfig: ApplicationConfig = {


  providers: [provideRouter(routes),provideAnimations(), AngularFireDatabase, provideHttpClient(),
    importProvidersFrom([provideFirebaseApp(() => initializeApp(environment.firebaseConfig)
    ),
      AngularFireModule.initializeApp(environment.firebaseConfig),
      provideAuth(() => getAuth())
    ])]

};
