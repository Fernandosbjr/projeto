import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { TodolistComponent } from './todolist/todolist.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { PoModule, PoChartComponent, PoChartModule } from '@portinari/portinari-ui';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GraficoComponent } from './grafico/grafico.component';


const APP_ROUTES: Routes = [
 { path: 'home', component: HomeComponent },
 { path: 'login', component: LoginComponent },  
 { path: 'todolist', component: TodolistComponent },
 { path: 'grafico', component: GraficoComponent } 
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodolistComponent,
    HomeComponent,
    GraficoComponent       

  ],
  imports: [
    routing,
    PoModule,    
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
     
              
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
