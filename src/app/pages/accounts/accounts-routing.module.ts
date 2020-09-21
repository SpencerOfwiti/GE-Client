import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountsComponent } from './accounts.component';
import {CreateAccountComponent} from './create-account/create-account.component';
import {ExportAccountsComponent} from './export-accounts/export-accounts.component';
import {AccountDetailsComponent} from './account-details/account-details.component';

const routes: Routes = [
  { path: '', component: AccountsComponent },
  { path: 'create', component: CreateAccountComponent },
  { path: 'export', component: ExportAccountsComponent },
  { path: ':id', component: AccountDetailsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
