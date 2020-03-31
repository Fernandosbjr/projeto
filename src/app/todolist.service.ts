import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TodolistInterface } from "./TodolistInterface";
import { tap } from "rxjs/operators";


@Injectable({
    providedIn: 'root'
})

export class TodolistService {

private readonly API = 'http://localhost:3000/tarefa'

 constructor (private http: HttpClient){}
 
 list(){
     return this.http.get<TodolistInterface[]>(this.API)
     .pipe(
         tap(console.log)
     )
     ;
 }
}
