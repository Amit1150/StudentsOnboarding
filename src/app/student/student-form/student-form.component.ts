import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { FormArray, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Category } from 'src/app/models/Category';
import { Document } from 'src/app/models/Document';
import { StudentService } from '../student.service';
import { MessageService } from 'primeng/api';
import { CategoryValidator } from 'src/app/shared/validators/category.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  @Input('student') student:Student = null;
  @Input('isView') isView:boolean = false;

  form:FormGroup;
  categories: Category[] = [];
  documents:Document[] = [];
  isUpdate:boolean = false;
  maxDate:Date;
  constructor(private studentService: StudentService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      category: ['', CategoryValidator.required],
      documents: fb.array([]),
      dob: [''],
      fatherName: [''],
      motherName: [''],
      score: ['']
    });
  }

  ngOnInit() {
    this.maxDate = new Date();
    this.studentService.getCategories().subscribe(data => {
      data.unshift({id : '', name : 'Select Category'});
      this.categories = data;
    });

    if(this.student) {
      this.isUpdate = true;
      this.setFormValue();
    }
  }

  get name() {
    return this.form.get('name');
  }

  get category() {
    return this.form.get('category');
  }

  get documentCtrl() {
    return (this.form.get('documents') as FormArray);
  }

  onCategorySelect(event) {
    this.getDocuments(event.value.id);
  }

  /* get document based on category selection*/
  getDocuments(categoryId: number) {
    this.resetDocuments();
    if(categoryId > 0) {
      this.studentService.getDocuments(categoryId).subscribe(data => {
        this.documents = data;
        this.addDocumentControl();
      });
    }
  }

  /* Add checkbox control to form */
  addDocumentControl () {
    this.documents.forEach((obj, index) => {
      var control = obj.isRequired ?
        new FormControl('',Validators.requiredTrue) :
        new FormControl('');
        control.setValue(obj.isSelected);
      this.documentCtrl.push(control);
    });
  }

  /* reset documents of category change*/
  resetDocuments() {
    this.documentCtrl.reset();
    while (this.documentCtrl.length !== 0) {
      this.documentCtrl.removeAt(0);
      this.documents.pop();
    }
  }

  /* Save/Update student */
  save() {
    let data = this.form.value;
    this.processFormData(data);
    if(this.isUpdate) {
      data.id = this.student.id;
      this.updateStudent(data);
    }else {
      data.id = null;
      this.addStudent(data);
    }
  }

  /* Process form data before save */
  processFormData(data: Student) {
    let selectedDocuments : Document[] = [];
    data.documents.forEach((element, index) => {
      let item = this.documents[index];
      item.isSelected = element ? true : false;
      selectedDocuments.push(item);
    });
    data.documents = selectedDocuments;
  }

  /* add student*/
  addStudent(data: Student) {
    this.studentService.saveStudent(data).subscribe(result => {
      this.messageService.add({severity:'success', summary: 'Success', detail:'Student added.'});
      //redirect to list view.
      this.router.navigate(['student/list']);
    });
  }

  /* update student*/
  updateStudent(data:Student) {
    this.studentService.updateStudent(data).subscribe(result => {
      this.messageService.add({severity:'success', summary: 'Success', detail:'Student updated.'});
      //redirect to list view.
      this.router.navigate(['student/list']);
    });
  }

  /* This is for update/view */
  setFormValue() {
    this.documents = this.student.documents;  
    this.form.patchValue({
      name: this.student.name,
      fatherName : this.student.fatherName,
      motherName : this.student.motherName,
      score: this.student.score,
      category : this.student.category,
      dob : this.student.dob ? new Date(this.student.dob) : ''
    });
    this.addDocumentControl();

    //Disable all controls, if it is view only.
    if(this.isView) {
      this.form.disable();
    }
  }
}
