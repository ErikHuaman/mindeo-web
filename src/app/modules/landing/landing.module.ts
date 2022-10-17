import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingViewComponent } from './view/landing-view/landing-view.component';

@NgModule({
  declarations: [LandingViewComponent],
  imports: [LandingRoutingModule, CoreModule],
})
export class LandingModule {}
