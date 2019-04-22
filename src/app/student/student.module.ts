import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentRoutingModule } from './student-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeComponentModule } from '../prime-component/prime-component.module';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentFormComponent } from './student-form/student-form.component';

@NgModule({
  declarations: [StudentComponent, StudentListComponent, StudentAddComponent, StudentViewComponent, StudentEditComponent, StudentFormComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeComponentModule
  ]
})
export class StudentModule { }
