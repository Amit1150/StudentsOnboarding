import { NgModule } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {PasswordModule} from 'primeng/password';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {TooltipModule} from 'primeng/tooltip';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [],
  exports: [
    CheckboxModule,
    InputTextModule,
    PasswordModule,
    DropdownModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    ProgressSpinnerModule,
    ToastModule,
    CalendarModule,
    TableModule,
    ConfirmDialogModule,
    TooltipModule,
    DialogModule
  ]
})
export class PrimeComponentModule { }
