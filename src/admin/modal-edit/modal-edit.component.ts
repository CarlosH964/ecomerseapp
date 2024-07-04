import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/shared/Service/Api.service';

@Component({
  selector: 'app-modal-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css']
})
export class ModalEditComponent {

  ObjectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: ApiService
  ) {
    this.ObjectForm = this.fb.group({
      elementobjectid: { value: data.Object.objectId, disabled: true },
      elementTittle: [data.Object.name],
      elementDescription: [data.Object.description],
      elementCustomer: [data.Object.customer],
      elementPrice: [data.Object.price],
      elementStock: [data.Object.stock]
    });
  }

  updatebject() {
    const updatedObj = {
      objectId: this.ObjectForm.value.elementobjectid,
      name: this.ObjectForm.value.elementTittle,
      description: this.ObjectForm.value.elementDescription,
      customer: this.ObjectForm.value.elementCustomer,
      price: this.ObjectForm.value.elementPrice,
      stock: this.ObjectForm.value.elementStock
    };

    console.log(updatedObj);

    this.service.updateObject(updatedObj).subscribe(
      (response) => {
        console.log('Object updated successfully', response);
        this.dialogRef.close(true);
      },
      (error) => {
        console.error('Error updating object:', error);
      }
    );
  }

  cancel() {
    this.dialogRef.close(false);
  }

}

