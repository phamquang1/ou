import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarHeaderComponent } from './toolbar-header/toolbar-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SwiperProductComponent } from './swiper-product/swiper-product.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    ToolbarHeaderComponent,
    SwiperProductComponent,
    SidebarComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    FormsModule,
    SwiperModule
  ],
  exports: [
    ToolbarHeaderComponent,
    SidebarComponent,
    SwiperProductComponent,
    CartComponent
  ]
})
export class ComponentsModule { }
