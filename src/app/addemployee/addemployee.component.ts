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

  ngOnInit() { }
  

  //<---------initialize FormBuilder in Constructor>
  constructor(private fb: FormBuilder) { }

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
  onSubmit() {
    console.log(this.addemployeeForm.value);
    this.employee = Object.assign(this.employee, this.addemployeeForm.value);
    this.addUser(this.employee);
    this.addemployeeForm.reset();
   // localStorage.setItem('Employee',JSON.stringify(this.employee)); //<-----addding to local storage>
    alert("New Employee Added Successfully !!!")
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





















