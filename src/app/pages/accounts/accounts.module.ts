import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import {SharedModule} from '../../shared/shared.module';
import {DataTablesModule} from 'angular-datatables';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { ExportAccountsComponent } from './export-accounts/export-accounts.component';
import { DisbursementComponent } from './disbursement/disbursement.component';


@NgModule({
  declarations: [AccountsComponent, CreateAccountComponent, AccountDetailsComponent, ExportAccountsComponent, DisbursementComponent],
    imports: [
      CommonModule,
      AccountsRoutingModule,
      SharedModule,
      DataTablesModule
    ]
})
export class AccountsModule { }
