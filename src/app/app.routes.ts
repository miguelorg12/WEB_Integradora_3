import { Routes } from '@angular/router';
import { HomeComponent } from './Views/home/home.component';
import { WelcomeComponent } from './Views/welcome/welcome.component';


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
    { path: 'sensores', loadComponent:() => import('./Views/Sensores/index/index.component').then(m => m.IndexComponent)},
    { path: 'sensores/create', loadComponent:() => import('./Views/Sensores/create/create.component').then(m => m.CreateComponent)},
    { path: 'sensores/edit/:id', loadComponent:() => import('./Views/Sensores/update/update.component').then(m => m.UpdateComponent)},
    //Rutas Usuarios
    { path: 'usuarios', loadComponent:() => import('./Views/Usuarios/index/index.component').then(m => m.IndexComponent)},
    { path: 'usuarios/create', loadComponent:() => import('./Views/Usuarios/create/create.component').then(m => m.CreateComponent)},
    { path: 'usuarios/edit/:id', loadComponent:() => import('./Views/Usuarios/update/update.component').then(m => m.UpdateComponent)},
    //Rutas Bebes
    { path: 'bebes', loadComponent:() => import('./Views/Bebes/index/index.component').then(m => m.IndexComponent)},
    { path: 'bebes/create', loadComponent:() => import('./Views/Bebes/create/create.component').then(m => m.CreateComponent)},
    { path: 'bebes/edit/:id', loadComponent:() => import('./Views/Bebes/update/update.component').then(m => m.UpdateComponent)},
    { path: 'bebes-incubadoras', loadComponent:() => import('./Views/bebes-incubadoras/bebes-incubadoras.component').then(m => m.BebesIncubadorasComponent)},
    //Rutas Contacto
    { path: 'contacto', loadComponent:() => import('./Views/Contacto/index/index.component').then(m => m.IndexComponent)},
    { path: 'contacto/create', loadComponent:() => import('./Views/Contacto/create/create.component').then(m => m.CreateComponent)},
    { path: 'contacto/edit/:id', loadComponent:() => import('./Views/Contacto/update/update.component').then(m => m.UpdateComponent)},
    //Rutas Historial
    { path: 'historial', loadComponent:() => import('./Views/Historial/index/index.component').then(m => m.IndexComponent)},
    { path: 'historial/create', loadComponent:() => import('./Views/Historial/create/create.component').then(m => m.CreateComponent)},
    { path: 'historial/edit/:id', loadComponent:() => import('./Views/Historial/update/update.component').then(m => m.UpdateComponent)},
    //Rutas Incubadoras
    { path: 'incubadoras', loadComponent:() => import('./Views/Incubadoras/index/index.component').then(m => m.IndexComponent)},
    { path: 'incubadoras/create', loadComponent:() => import('./Views/Incubadoras/create/create.component').then(m => m.CreateComponent)},
    { path: 'incubadoras/edit/:id', loadComponent:() => import('./Views/Incubadoras/update/update.component').then(m => m.UpdateComponent)},
    //Rutas Perfil
    {path: 'profile', loadComponent:() => import('./Views/profile/profile.component').then(m => m.ProfileComponent)},
    //Rutas de hospitales
    { path: 'hospitales', loadComponent:() => import('./Views/Hospitales/index/index.component').then(m => m.IndexComponent)},
    { path: 'hospitales/create', loadComponent:() => import('./Views/Hospitales/create/create.component').then(m => m.CreateComponent)},
    { path: 'hospitales/edit/:id', loadComponent:() => import('./Views/Hospitales/update/update.component').then(m => m.UpdateComponent)},
    { path: '', component: HomeComponent},
    { path: '**', component: HomeComponent}
];
