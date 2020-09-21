import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import {SharedModule} from '../../shared/shared.module';
import { InviteComponent } from './invite/invite.component';
import { OrganizationComponent } from './organization/organization.component';


@NgModule({
  declarations: [SettingsComponent, InviteComponent, OrganizationComponent],
    imports: [
        CommonModule,
        SettingsRoutingModule,
        SharedModule
    ]
})
export class SettingsModule { }
