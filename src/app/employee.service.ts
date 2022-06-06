import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { Employee } from './employee';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
 


  private apiServerUrl = environment.apiBaseUrl;


  

  
  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.apiServerUrl}/getall`);
  }

  CreateEmployee(employee:Employee):Observable<Employee>{
    return this.httpClient.post<Employee>(`${this.apiServerUrl}/addemployee`,employee);
  }
 
  getEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.apiServerUrl}/${id}`);
  }

  UpdateEmployee(id:number,employee:Employee):Observable<Employee>{
  return this.httpClient.put<Employee>(`${this.apiServerUrl}/${id}`,employee);   
  }

  deleteEmployee(id:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.apiServerUrl}/${id}`);
  }

} 
