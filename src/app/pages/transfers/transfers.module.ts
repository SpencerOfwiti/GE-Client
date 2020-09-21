import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransfersRoutingModule } from './transfers-routing.module';
import { TransfersComponent } from './transfers.component';
import {SharedModule} from '../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';


@NgModule({
  declarations: [TransfersComponent],
    imports: [
        CommonModule,
        TransfersRoutingModule,
        SharedModule,
        DataTablesModule
    ]
})
export class TransfersModule { }
