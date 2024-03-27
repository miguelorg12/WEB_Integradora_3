import { Routes } from '@angular/router';
import { LoginComponent } from './Views/login/login.component';
import { RegisterComponent } from './Views/register/register.component';
import { PasswordRecoveryComponent } from './Views/password-recovery/password-recovery.component';
import { CodeVerificacionComponent } from './Views/code-verificacion/code-verificacion.component';
import { CheckEmailComponent } from './Views/check-email/check-email.component';
import { HomeComponent } from './Views/home/home.component';
import { WelcomeComponent } from './Views/welcome/welcome.component';
import { IndexComponent } from './Views/Values/index/index.component';


export const routes: Routes = [
    //Rutas logeo y registro
    { path: 'login', loadComponent:() => import('./Views/login/login.component').then(m => m.LoginComponent)},
    { path: 'register', loadComponent:() => import('./Views/register/register.component').then(m => m.RegisterComponent)},
    { path: 'password-recovery', loadComponent:() => import('./Views/password-recovery/password-recovery.component').then(m => m.PasswordRecoveryComponent)},
    { path: 'code-verificacion', loadComponent:() => import('./Views/code-verificacion/code-verificacion.component').then(m => m.CodeVerificacionComponent)},
    { path: 'check-email', loadComponent:() => import('./Views/check-email/check-email.component').then(m => m.CheckEmailComponent)},
    { path: 'home', loadComponent:() => import('./Views/home/home.component').then(m => m.HomeComponent)},
    //Rutas Sensores
    { path: 'values', loadComponent:() => import('./Views/Values/index/index.component').then(m => m.IndexComponent)},
    { path: 'sensores/create', loadComponent:() => import('./Views/Sensores/create/create.component').then(m => m.CreateComponent)},
    { path: 'bebes', loadComponent:() => import('./Views/Bebes/index/index.component').then(m => m.IndexComponent)},
    { path: '', component: WelcomeComponent},
    { path: '**', component: HomeComponent}
];
