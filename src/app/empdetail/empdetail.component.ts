import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';


@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
})
export class EmpdetailComponent implements OnInit {
  @Input() emp: Emp;

  constructor(private route: ActivatedRoute,
    private empService: EmpService,
    private location: Location) {    
  }

  ngOnInit() {
    this.getEmp();
  }

  getEmp(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.empService.getEmp(id)
      .subscribe(emp => this.emp = emp);
  }

  goBack(): void {
    this.location.back();
  } 


}
