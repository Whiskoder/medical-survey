import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateFormComponent } from './pages/create-form/create-form.component';
import { HistoryFormComponent } from './pages/history-form/history-form.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateFormComponent,
  },
  {
    path: '',
    component: HistoryFormComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule {}
