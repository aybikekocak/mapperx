import {Routes} from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {HomeComponent} from "./component/home/home.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {ItemsComponent} from "./component/items/items.component";
import {UserSettingsComponent} from "./component/user-settings/user-settings.component";
import {AdminComponent} from "./component/admin/admin.component";
export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent , children:[
      { path: 'dashboard', component: DashboardComponent },
      { path: 'items', component: ItemsComponent },
      { path: 'user-settings', component: UserSettingsComponent },
      { path: 'admin', component: AdminComponent },
    ]},
];


