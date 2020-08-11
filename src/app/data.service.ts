import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient ) { }

  myfirstService(){
    return console.log('from service');
  }

  getUserData(){
    var url='assets/dataFile.json';
    return this._http.get(url);
  }
}
