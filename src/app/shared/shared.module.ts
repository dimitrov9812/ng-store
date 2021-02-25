import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // Components
    StarComponent,
    // Modules
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
