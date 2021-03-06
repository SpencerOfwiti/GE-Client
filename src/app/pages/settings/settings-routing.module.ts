import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import {InviteComponent} from './invite/invite.component';
import {OrganizationComponent} from './organization/organization.component';

const routes: Routes = [
  { path: '', component: SettingsComponent },
  { path: 'invite', component: InviteComponent },
  { path: 'organization', component: OrganizationComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
