import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() childEmit = new EventEmitter();
  @Input() row;
  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    address: new FormArray([], []),
    email: new FormControl('', [Validators.required]),
  });
  constructor() {}

  addAddress() {
    let list = this.formGroup.get('address') as FormArray;
    list.push(
      new FormGroup({ fullAddress: new FormControl('', [Validators.required]) })
    );
  }

  ngOnInit() {}
  saveDetails() {
    let row = this.formGroup.getRawValue();
    row.index = this.row?.index;
    this.childEmit.emit(row);
    this.formGroup.reset();
    this.row = {};
  }
  ngOnChanges() {
    if (this.row) {
      this.formGroup.patchValue(this.row);
    }
  }
}
