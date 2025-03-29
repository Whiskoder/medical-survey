import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { DatePickerModule } from 'primeng/datepicker';
import { InputMaskModule } from 'primeng/inputmask';
import { SelectButtonModule } from 'primeng/selectbutton';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    KeyFilterModule,
    ButtonModule,
    InputTextModule,
    ProgressBarModule,
    SelectModule,
    InputMaskModule,
    InputNumberModule,
    DatePickerModule,
    MultiSelectModule,
    SelectButtonModule,
  ],
})
export class PrimengModule {}
