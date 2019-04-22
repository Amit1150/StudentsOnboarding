import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  student: Student;

  constructor(private route: ActivatedRoute,
    private studentService: StudentService,) { }

  ngOnInit() {
    this.getStudent();
  }

  getStudent(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(id).subscribe(data => {
      this.student = data;
    });
  }

}
