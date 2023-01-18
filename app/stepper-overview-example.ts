import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormArray} from '@angular/forms';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

/**
 * @title Stepper overview
 */
@Component({
  selector: 'stepper-overview-example',
  templateUrl: 'stepper-overview-example.html',
  styleUrls: ['stepper-overview-example.css']
})
export class StepperOverviewExample {
  foods = [
    {value: 'steak-0', viewValue: 'E-mail'},
    {value: 'pizza-1', viewValue: 'SMS'},
   
  ];

  mainFormGroup: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  
  
  currentStep = 0;

  constructor(private _formBuilder: FormBuilder) {}

 

  ngOnInit() {
    this.mainFormGroup = this._formBuilder.group({
      formCount: 1,
      stepData: this._formBuilder.array([
        this._formBuilder.group({
          name: ["", Validators.required]
        })
      ])
    });
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required]
    });
  }
  addInput(currentIndex): void {
    const arrayControl = <FormArray>this.mainFormGroup.controls["stepData"];
    let newGroup = this._formBuilder.group({
      name: ["", Validators.required]
    });
    arrayControl.push(newGroup);
    const content = this;
    setTimeout(element => {
      content.currentStep = currentIndex + 1;
    });
  }

  delInput(index: number): void {
    const arrayControl = <FormArray>this.mainFormGroup.controls["stepData"];
    arrayControl.removeAt(index);
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */