import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
// import { MatDialogRef } from '@angular/material/dialog';
// import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog/dialog';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})

export class AddemployeeComponent implements OnInit {

  employee: any = {};

  // ngOnInit() {   if(this.data!=null){
  //   this.addemployeeForm.patchValue({
  //     name: this.data.name,
  //     gender: this.data.gender,
  //     email: this.data.email,
  //     salary:this.data.salary,
  //     contact: this.data.contact
  //   });
  // } }
  
  ngOnInit(): void {
    let employeePayrollList = JSON.parse(localStorage.getItem("Employees"));
    if (employeePayrollList[this.data] != null) {
      this.addemployeeForm.patchValue({
        name: employeePayrollList[this.data].name,
        email: employeePayrollList[this.data].email,
        gender: employeePayrollList[this.data].gender,
        salary: employeePayrollList[this.data].salary,
        contact: employeePayrollList[this.data].contact,
       
        
      });
    }
  }

  //<---------initialize FormBuilder in Constructor>
  constructor(private fb: FormBuilder ,  public dialogRef: MatDialogRef<AddemployeeComponent>,
    public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { }

  //<---------creating form using form builder------------>
    addemployeeForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],    //<-------validation of input                 
    gender: [''],
    email: ['' , [Validators.required , Validators.email]],
    salary: [''],
    contact: ['']

    // contact: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
   
  //<----------buttons on form------------> 
  // onSubmit() {
  //   console.log(this.addemployeeForm.value);
  //   this.employee = Object.assign(this.employee, this.addemployeeForm.value);
  //   this.addUser(this.employee);
  //   this.addemployeeForm.reset();
  //  // localStorage.setItem('Employee',JSON.stringify(this.employee)); //<-----addding to local storage>
  //   alert("New Employee Added Successfully !!!")
  // }
  onSubmit() {
    console.log(this.data);
    let employeePayrollList = JSON.parse(localStorage.getItem("Employees"));
    if (employeePayrollList[this.data] == null) {

      if (employeePayrollList != undefined) {
        employeePayrollList.push(this.addemployeeForm.value);
      } else {
        employeePayrollList = [this.addemployeeForm.value];
      }
      localStorage.setItem("Employees", JSON.stringify(employeePayrollList));
    }
    else {
      employeePayrollList.splice(this.data, 1, this.addemployeeForm.value);
      localStorage.setItem("Employees", JSON.stringify(employeePayrollList));
      this.dialogRef.close();
    }
  }

  addUser(employee: any) {
    let employees = [];
    if (localStorage.getItem('Employees')) {
      employees = JSON.parse(localStorage.getItem('Employees'));
      employees = [employee, ...employees];     //    ... <- Spread operator allows the elements of array to expand
    }
    else {
      employees = [employee];
    }
    localStorage.setItem('Employees', JSON.stringify(employees));
  }

  onReset() {
    this.addemployeeForm.setValue({
      name: '',
      gender: '',
      email: '',
      salary: '',
      contact: ''
    });
    console.log('RESET WAS CLICKED !');
  }

}
























