import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from 'src/app/models/Student';

@Component({
  selector: 'student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

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
