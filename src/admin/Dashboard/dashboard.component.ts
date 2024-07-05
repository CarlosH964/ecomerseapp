import { Component, OnInit, inject } from '@angular/core';
import { ApiService, ElementItem } from '../../shared/Service/Api.service';
import { ModalCreateComponent } from '../modal-create/modal-create.component';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-admin',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  element: ElementItem[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.GetData();
  }
  GetData() {
    this.apiService.getObjects().subscribe(
      (data) => {
        this.element = data;
        console.log(this.element);
      },
      (error) => {
        console.error('Error fetching tasks:', error);
      }
    );
  }

  calculateTotal(item: ElementItem): number {
    return item.price * item.stock;
  }

  deleteObject(id: number): void {
    this.apiService.deleteObject(id).subscribe(
      (response) => {
        console.log('Object deleted successfully', response);
        this.GetData();
      },
      (error) => {
        console.error('Error deleting:', error);
      }
    );
  }

  //Modal

  readonly dialog = inject(MatDialog);

  openCreateDialog(): void {
    this.dialog.open(ModalCreateComponent, {
      width: 'fullscreen',
    }).afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.GetData();
      }
    });
  }

  openEditDialog(Object: ElementItem): void {
    const dialogedit = this.dialog.open(ModalEditComponent, {
      width: 'fullscreen',
      data: { Object: { ...Object } }
    });

    dialogedit.afterClosed().subscribe(result => {
      if (result) {
        this.GetData();
      }
    });
  }
}
