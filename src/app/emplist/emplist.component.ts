import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';
import { EMPS } from '../empdata';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

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
