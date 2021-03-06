import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutComponent, ProductFormComponent } from './shared/components';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from './shared/services/auth.guard';
import {
  LoginComponent,
  DashboardComponent,
  CreateComponent,
  EditComponent
} from '@admin-pages';

const adminRoutes: Routes =[
  {
    path: '', component: AdminLayoutComponent, children: [
      { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'create', component: CreateComponent, canActivate: [AuthGuard] },
      { path: 'product/:id/edit', component: EditComponent, canActivate: [AuthGuard] },
    ]
  },
];

@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
    LoginComponent,
    CreateComponent,
    EditComponent,
    ProductFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(adminRoutes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    AuthGuard,
  ]
})
export class AdminModule { }
