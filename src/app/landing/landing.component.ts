import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';
import { EMPS } from '../empdata';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  emps: Emp[];

  selectedEmp: Emp;

  constructor(private _empService : EmpService) { }

  ngOnInit() {
    this.getEmps();
  }

  onSelect(emp: Emp): void {
    this.selectedEmp = emp;
  }

  getEmps(){
    this._empService.getEmps()
      .subscribe(emps => this.emps = emps);
  }

}
