import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { StudentService } from '../student.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  isLoading:boolean;
  students: Student[] = [];
  cols: any[];
  filter: any[];

  constructor(private studentService : StudentService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,) { }

  ngOnInit() {
    this.getStudents();
    this.cols = [
      { 'field' :'name', 'header' : 'Name'}
    ];

    this.filter = [
      { value : '', label : 'All'},
      { value : 1, label : 'International'},
      { value : 2, label : 'Domestic'},
    ]
  }

  /* get list of student*/
  getStudents() {
    this.isLoading = true;
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
      this.isLoading = false;
    });
  }

  /* Delete student */
  delete(id:Number) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this student?',
      accept: () => {
        this.isLoading = true;
        this.studentService.deleteStudent(id).subscribe(data => {
          this.messageService.add({severity:'success', summary: 'Success', detail:'Student deleted.'});
          this.getStudents();
        });
      }
    });
  }
}
