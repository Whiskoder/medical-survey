import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateFormComponent } from './pages/create-form/create-form.component';
import { FormsRoutingModule } from './forms-routing.module';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsFieldComponent } from './components/field/field.component';
import { FabComponent } from './components/fab/fab.component';
import { HistoryFormComponent } from './pages/history-form/history-form.component';

@NgModule({
  declarations: [
    CreateFormComponent,
    HistoryFormComponent,
    FormsFieldComponent,
    FabComponent,
  ],
  imports: [
    FormsRoutingModule,
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SFormsModule {}
