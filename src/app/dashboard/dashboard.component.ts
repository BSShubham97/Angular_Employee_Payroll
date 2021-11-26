import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   employeepayrollList: any;
  //  employeeCount: number= 10;
 
  constructor(public dialog : MatDialog) { }
  // constructor() { }

  ngOnInit(): void {
this.employeepayrollList = localStorage.getItem('Employees')? JSON.parse(localStorage.getItem('Employees')):[] ;
// this.employeeCount = this.employeepayrollList.length;
}

remove( index : number){
 const empList = this.employeepayrollList;
 empList.splice(index,1);
 localStorage.setItem('Employees',JSON.stringify(empList));
console.log('DELETED DATA !!!')
alert("Deleted Successfully !!!")
}

// update(index : any){
//   localStorage.setItem('index', JSON.stringify(this.employeepayrollList));
//   console.log('Edited !!!')
  // localStorage.setItem('myItem', JSON.stringify({"id": index, "Employees":"sample data"}))


  update( index : number) {
    console.log(index);
    const dialogRef = this.dialog.open(AddemployeeComponent, {
      data: index
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.ngOnInit();
      console.log('Edited !!!')

    })
  }
  }



  
// remove(i: number){
//   if(this.employeepayrollList == null){
//     const empList = this.employeepayrollList;
//     empList.splice(i,1);
//     localStorage.setItem('EmployeePayrollList', JSON.stringify(empList));
//     this.employeeCount=this.employeepayrollList.length;
//   }
// }