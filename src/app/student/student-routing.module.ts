import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { AuthGuardService } from '../core/authentication/auth-guard.service';
import { StudentEditComponent } from './student-edit/student-edit.component';


const routes: Routes = [
    {
        path: 'student',
        component: StudentComponent,
        children: [
            {
                path: 'list',
                component: StudentListComponent,
                canActivate: [AuthGuardService],
            },
            {
                path: 'add',
                component: StudentAddComponent,
                canActivate: [AuthGuardService],
            },
            {
                path: 'view/:id',
                component: StudentViewComponent,
                canActivate: [AuthGuardService],
            },
            {
                path: 'edit/:id',
                component: StudentEditComponent,
                canActivate: [AuthGuardService],
            }
        ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }