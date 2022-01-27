import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoresRoutingModule } from './stores-routing.module';
import { StoresComponent } from './stores.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    StoresComponent
  ],
  imports: [
    CommonModule,
    StoresRoutingModule,
    ComponentsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class StoresModule { }
