import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NoAuthRoutingModule} from "./no-auth-routing.module";
import { BaseComponent, LoginComponent, RegisterComponent } from './components';
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    BaseComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    NoAuthRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class NoAuthModule { }
