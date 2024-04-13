import { Routes } from '@angular/router';
import { HomeComponent } from './Views/home/home.component';
import { WelcomeComponent } from './Views/welcome/welcome.component';
import { AuthGuard } from './Guards/auth.guard';
import { RoleGuard } from './Guards/rol.guard';

export const routes: Routes = [
    //Rutas logeo y registro
    { path: 'login', loadComponent:() => import('./Views/login/login.component').then(m => m.LoginComponent)},
    { path: 'register', loadComponent:() => import('./Views/register/register.component').then(m => m.RegisterComponent)},
    { path: 'password-recovery', loadComponent:() => import('./Views/password-recovery/password-recovery.component').then(m => m.PasswordRecoveryComponent)},
    { path: 'code-verificacion', loadComponent:() => import('./Views/code-verificacion/code-verificacion.component').then(m => m.CodeVerificacionComponent)},
    { path: 'check-email', loadComponent:() => import('./Views/check-email/check-email.component').then(m => m.CheckEmailComponent)},
    { path: 'home', loadComponent:() => import('./Views/home/home.component').then(m => m.HomeComponent), canActivate: [AuthGuard, RoleGuard], data: {role: ['Developer', 'Administrador', 'Doctor', 'Enfermera', 'Invitado']}},
    //Rutas Sensores
    { path: 'values', loadComponent:() => import('./Views/Values/index/index.component').then(m => m.IndexComponent), canActivate: [AuthGuard, RoleGuard], data: {role: ['Developer', 'Administrador']}},
    { path: 'sensores', loadComponent:() => import('./Views/Sensores/index/index.component').then(m => m.IndexComponent), canActivate: [AuthGuard, RoleGuard], data: {role: ['Developer', 'Administrador']}},
    { path: 'sensores/create', loadComponent:() => import('./Views/Sensores/create/create.component').then(m => m.CreateComponent), canActivate: [AuthGuard, RoleGuard], data: {role: ['Developer', 'Administrador']}},
    { path: 'sensores/edit/:id', loadComponent:() => import('./Views/Sensores/update/update.component').then(m => m.UpdateComponent), canActivate: [AuthGuard, RoleGuard], data: {role: ['Developer', 'Administrador']}},
    //Rutas Usuarios
    { path: 'usuarios', loadComponent:() => import('./Views/Usuarios/index/index.component').then(m => m.IndexComponent), canActivate: [AuthGuard, RoleGuard], data: {role: ['Developer', 'Administrador']}},
    { path: 'usuarios/create', loadComponent:() => import('./Views/Usuarios/create/create.component').then(m => m.CreateComponent), canActivate: [AuthGuard, RoleGuard], data: {role: ['Developer', 'Administrador']}},
    { path: 'usuarios/edit/:id', loadComponent:() => import('./Views/Usuarios/update/update.component').then(m => m.UpdateComponent), canActivate: [AuthGuard, RoleGuard], data: {role: ['Developer', 'Administrador']}},
    //Rutas Bebes
    { path: 'bebes', loadComponent:() => import('./Views/Bebes/index/index.component').then(m => m.IndexComponent), canActivate: [AuthGuard, RoleGuard], data: {role: ['Developer', 'Administrador', 'Doctor', 'Enfermera', ]}},
    { path: 'bebes/create', loadComponent:() => import('./Views/Bebes/create/create.component').then(m => m.CreateComponent), canActivate: [AuthGuard, RoleGuard], data: {role: ['Developer', 'Administrador', 'Doctor', 'Enfermera']}},
    { path: 'bebes/edit/:id', loadComponent:() => import('./Views/Bebes/update/update.component').then(m => m.UpdateComponent), canActivate: [AuthGuard, RoleGuard], data: {role: ['Developer', 'Administrador', 'Doctor', 'Enfermera']}},
    { path: 'bebes-incubadoras', loadComponent:() => import('./Views/bebes-incubadoras/bebes-incubadoras.component').then(m => m.BebesIncubadorasComponent), canActivate: [AuthGuard, RoleGuard], data: {role: ['Developer', 'Administrador', 'Doctor', 'Enfermera']}},
    //Rutas Contacto
    { path: 'contacto', loadComponent:() => import('./Views/Contacto/index/index.component').then(m => m.IndexComponent), canActivate: [AuthGuard, RoleGuard], data: {role: ['Developer', 'Administrador', 'Doctor', 'Enfermera']}},
    { path: 'contacto/create', loadComponent:() => import('./Views/Contacto/create/create.component').then(m => m.CreateComponent), canActivate: [AuthGuard, RoleGuard], data: {role: ['Developer', 'Administrador', 'Doctor', 'Enfermera']}},
    { path: 'contacto/edit/:id', loadComponent:() => import('./Views/Contacto/update/update.component').then(m => m.UpdateComponent), canActivate: [AuthGuard, RoleGuard], data: {role: ['Developer', 'Administrador', 'Doctor', 'Enfermera']}},
    //Rutas Historial
    { path: 'historial', loadComponent:() => import('./Views/Historial/index/index.component').then(m => m.IndexComponent), canActivate: [AuthGuard, RoleGuard], data: {role: ['Developer', 'Administrador', 'Doctor', 'Enfermera',]}},
    { path: 'historial/create', loadComponent:() => import('./Views/Historial/create/create.component').then(m => m.CreateComponent), canActivate: [AuthGuard, RoleGuard], data: {role: ['Developer', 'Administrador', 'Doctor', 'Enfermera',]}},
    { path: 'historial/edit/:id', loadComponent:() => import('./Views/Historial/update/update.component').then(m => m.UpdateComponent), canActivate: [AuthGuard, RoleGuard], data: {role: ['Developer', 'Administrador', 'Doctor', 'Enfermera',]}},
    //Rutas Incubadoras
    { path: 'incubadoras', loadComponent:() => import('./Views/Incubadoras/index/index.component').then(m => m.IndexComponent), canActivate: [AuthGuard, RoleGuard], data: {role: ['Developer', 'Administrador']}},
    { path: 'incubadoras/create', loadComponent:() => import('./Views/Incubadoras/create/create.component').then(m => m.CreateComponent), canActivate: [AuthGuard, RoleGuard], data: {role: ['Developer', 'Administrador']}},
    { path: 'incubadoras/edit/:id', loadComponent:() => import('./Views/Incubadoras/update/update.component').then(m => m.UpdateComponent), canActivate: [AuthGuard, RoleGuard], data: {role: ['Developer', 'Administrador']}},
    //Rutas Perfil
    {path: 'profile', loadComponent:() => import('./Views/profile/profile.component').then(m => m.ProfileComponent), canActivate:[AuthGuard, RoleGuard], data: {role: ['Developer', 'Administrador', 'Doctor', 'Enfermera', 'Invitado']}},
    //Rutas de hospitales
    { path: 'hospitales', loadComponent:() => import('./Views/Hospitales/index/index.component').then(m => m.IndexComponent), canActivate: [AuthGuard, RoleGuard], data: {role: ['Developer']}},
    { path: 'hospitales/create', loadComponent:() => import('./Views/Hospitales/create/create.component').then(m => m.CreateComponent), canActivate: [AuthGuard, RoleGuard], data: {role: ['Developer']}},
    { path: 'hospitales/edit/:id', loadComponent:() => import('./Views/Hospitales/update/update.component').then(m => m.UpdateComponent), canActivate: [AuthGuard, RoleGuard], data: {role: ['Developer']}},
    { path: '', component: WelcomeComponent},
    { path: '**', loadComponent:() => import('./General/not-found/not-found.component').then(m => m.NotFoundComponent)}
];
