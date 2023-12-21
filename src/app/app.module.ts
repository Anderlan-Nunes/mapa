import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrimeModule } from './prime/prime.module';
import { SidebarComponent } from './components/templates/sidebar/sidebar.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { TestesComponent } from './components/templates/testes/testes.component';
import { CascadeSelectComponent } from './components/cascade-select/cascade-select.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    TestesComponent,
    CascadeSelectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
