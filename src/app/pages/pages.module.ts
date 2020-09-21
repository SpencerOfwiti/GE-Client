import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {SharedModule} from '../shared/shared.module';
import {ChartsModule} from 'ng2-charts';


@NgModule({
  declarations: [PagesComponent],
    imports: [
      CommonModule,
      PagesRoutingModule,
      SharedModule,
      ChartsModule
    ]
})
export class PagesModule { }
