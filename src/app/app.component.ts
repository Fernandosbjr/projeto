import { Component, NgModule } from '@angular/core';

import { PoModule, PoLoginComponent, PoButtonGroupItem } from '@portinari/portinari-ui';
import { routing } from './app.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
  ],
  imports: [
    routing,
    PoModule,
    FormsModule,
    ReactiveFormsModule,
    PoLoginComponent,       
    BrowserModule,
    LoginComponent,
    HttpClient,
    HttpClientModule    

  ],
  providers: [],
  bootstrap: [AppComponent]
})


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'To do List';
  description = 'To-Do List';
  url = '/assets/todolist.jpg';

}
