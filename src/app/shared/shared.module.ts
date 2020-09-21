import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import { MenuToggleDirective } from './_directives/menu-toggle.directive';
import { MenuSelectionDirective } from './_directives/menu-selection.directive';



@NgModule({
    declarations: [SidebarComponent, TopbarComponent, FooterComponent, MenuToggleDirective, MenuSelectionDirective],
  exports: [
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    MenuSelectionDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
