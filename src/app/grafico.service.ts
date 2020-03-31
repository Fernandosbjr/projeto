import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { graficointerface } from "./graficointerface";
import { tap } from "rxjs/operators";


@Injectable({
    providedIn: 'root'
})

export class GraficoService{

private readonly API = 'http://localhost:3000/grafico'

 constructor (private http: HttpClient){}
 
 list(){
     //let retorno = this.http.get<graficointerface[]>(this.API);
     //console.log(retorno)
     return this.http.get<graficointerface[]>(this.API);
 }
}

/*

 list(){
     return this.http.get<graficointerface[]>(this.API)
     .pipe(
         tap(console.log)
     )
     ;
 }

*/