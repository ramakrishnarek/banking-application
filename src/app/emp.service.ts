import { Injectable } from '@angular/core';

import { Emp } from './emp';
import { EMPS } from './empdata';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor() { }

  getEmps(): Observable<Emp[]> {
    return of(EMPS);
  }

  getEmp(id: number): Observable<Emp> {    
    return of(EMPS.find(emp => emp.id === id));
  }

}
