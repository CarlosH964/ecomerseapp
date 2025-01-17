import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

export interface ElementItem {
    id: number;
    objectId: number;
    name: string;
    description: string;
    customer: string;
    price: number;
    stock: number;
    img: string; 
  }
  

  @Injectable({
    providedIn: 'root'
  })

  export class ApiService {
    private baseUrl = 'http://localhost:5146/api';

  constructor(private http: HttpClient) { }

  getObjects(data?:any): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/ObjectsEcommerces`);
  }

  createObject(data?:any): Observable<any> {
    return this.http.post<any[]>(`${this.baseUrl}/ObjectsEcommerces`, data);
  }

  deleteObject(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/ObjectsEcommerces/${id}`);
  }

  updateObject(Object: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/ObjectsEcommerces/${Object.id}`, Object);
  }
}