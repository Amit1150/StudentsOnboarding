import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { Category } from 'src/app/models/Category';
import { Document } from 'src/app/models/Document';
import { Student } from 'src/app/models/Student';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb(reqInfo?: import("angular-in-memory-web-api").RequestInfo): {} | import("rxjs").Observable<{}> | Promise<{}> {
    
    let categories : Category[] = [
      {id : 1, name : 'International'},
      {id : 2, name : 'Domestic'},
    ];

    let documents : Document[] = [
      {id : 1, name : 'Domicile', isRequired: true, categoryId : 1, isSelected : false},
      {id : 2, name : 'Birth certificate', isRequired: true, categoryId : 1, isSelected : false},
      {id : 3, name : 'Marksheets', isRequired: true, categoryId : 1, isSelected : false},
      {id : 4, name : 'Police clearance', isRequired: true, categoryId : 1, isSelected : false},
      {id : 5, name : 'Passport', isRequired: true, categoryId : 1, isSelected : false},
      {id : 6, name : 'Declaration', isRequired: true, categoryId : 1, isSelected : false},
      {id : 7, name : 'Domicile', isRequired: true, categoryId : 2, isSelected : false},
      {id : 8, name : 'Birth certificate', isRequired: true, categoryId : 2, isSelected : false},
      {id : 9, name : 'Marksheets', isRequired: true, categoryId : 2, isSelected : false},
      {id : 10, name : 'Police clearance', isRequired: false, categoryId : 2, isSelected : false},
      {id : 11, name : 'Passport', isRequired: false, categoryId : 2, isSelected : false},
      {id : 12, name : 'Declaration', isRequired: true, categoryId : 2, isSelected : false},
    ];

    let students: Student[] = [
      {id: 1, name : 'amit', category : { id: 2, name: 'Domestic'}, documents : [], dob: '', fatherName: '', motherName: '',score: '10'},
      {id: 2, name : 'test', category : { id: 1, name: 'International'}, documents : [], dob: '', fatherName: '', motherName: '',score: '12'},
      {id: 3, name : 'rahul', category : { id: 2, name: 'Domestic'}, documents : [], dob: '', fatherName: '', motherName: '',score: '34'},
    ];

    return {
      categories : categories,
      documents : documents,
      students : students
    };
  }

  genId(students: Student[]): number {
    return students.length > 0 ? Math.max(...students.map(students => students.id)) + 1 : 11;
  }
}
