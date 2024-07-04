import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/shared/Service/Api.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-modal-create',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.css']
})
export class ModalCreateComponent {
  ObjectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: ApiService,
    private dialogRef: MatDialogRef<ModalCreateComponent>
  ){
    this.ObjectForm = this.fb.group({
      objectId: [''],
      name: [''],
      description: [''],
      customer: [''],
      price: [''],
      stock: [''],
    });
  }

  addObject(){
    if (this.ObjectForm.valid) {
      this.service.createObject(this.ObjectForm.value).subscribe(
        (response) => {
          console.log('Object added successfully', response);
          this.dialogRef.close(true);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }


  cancel() {
    this.dialogRef.close(false);
  }
}
