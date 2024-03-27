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
    { path: 'login', loadComponent:() => import('./Views/login/login.component').then(m => m.LoginComponent)},
    { path: 'register', component: RegisterComponent },
    { path: 'password-recovery', component: PasswordRecoveryComponent },
    { path: 'code-verificacion', component: CodeVerificacionComponent },
    { path: 'check-email', component: CheckEmailComponent },
    { path: 'home', component: HomeComponent },
    {path: 'values/index', component: IndexComponent},
    { path: '', component: WelcomeComponent},
    { path: '**', component: HomeComponent}
];
