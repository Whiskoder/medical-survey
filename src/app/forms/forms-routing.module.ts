import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormHomePageComponent } from './pages/form-home-page/form-home-page.component';

const routes: Routes = [
  {
    path: '',
    component: FormHomePageComponent,
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
