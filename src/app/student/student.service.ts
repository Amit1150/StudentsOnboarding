import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/Category';
import { Document } from 'src/app/models/Document';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private SERVER_URL: string = "http://localhost:8080/api/";

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<Category[]>(this.SERVER_URL + 'categories');
  }

  getDocuments(categoryId: number) {
    return this.http.get<Document[]>(this.SERVER_URL+'documents?categoryId='+categoryId);
  }

  saveStudent(data: Student) {
    return this.http.post(this.SERVER_URL+'students', data);
  }

  updateStudent(data:Student) {
    return this.http.put(this.SERVER_URL + 'students/'+data.id, data);
  }

  getStudents() {
    return this.http.get<Student[]>(this.SERVER_URL +'students');
  }

  getStudent(id:Number) {
    return this.http.get<Student>(this.SERVER_URL + 'students/'+id);
  }

  deleteStudent(id:Number) {
    return this.http.delete(this.SERVER_URL +'students/'+id);
  }
}
