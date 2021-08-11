import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatComponentsModule } from '../mat-components/mat-components.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatComponentsModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModuleModule { }
