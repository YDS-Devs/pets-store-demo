import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { HeaderComponent } from './components/header/header.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ItemsComponent } from './components/items/items.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    CheckoutComponent,
    FiltersComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModuleModule
  ]
})
export class HomePageModule { }
