import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'add-new-post-dialog',
  templateUrl: './add-new-post-dialog.component.html',
  styleUrls: ['./add-new-post-dialog.component.css']
})
export class AddNewPostDialogComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddNewPostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {
    this.form = new FormGroup({
      userId: new FormControl(),
      title: new FormControl(),
      body: new FormControl()
  });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

}
