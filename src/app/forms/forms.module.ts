import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormHomePageComponent } from './pages/form-home-page/form-home-page.component';
import { FormsRoutingModule } from './forms-routing.module';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsFieldComponent } from './components/field/field.component';

@NgModule({
  declarations: [FormHomePageComponent, FormsFieldComponent],
  imports: [FormsRoutingModule, CommonModule, PrimengModule, FormsModule],
})
export class SFormsModule {}
