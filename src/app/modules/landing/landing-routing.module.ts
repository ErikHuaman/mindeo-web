import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingViewComponent } from './view/landing-view/landing-view.component';

const routes: Routes = [
  {
    path: '',
    component: LandingViewComponent,
    data: { title: 'landing' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
