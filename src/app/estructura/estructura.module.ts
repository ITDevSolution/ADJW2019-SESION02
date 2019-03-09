import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstructuraRoutingModule } from './estructura-routing.module';
import { EstructuraComponent } from '../estructura/estructura.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [EstructuraComponent, MenuComponent],
  imports: [
    CommonModule,
    EstructuraRoutingModule
  ]
})
export class EstructuraModule { }
