import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminPageComponent],
  imports: [CommonModule],
  exports: [AdminPageComponent],
})
export class AdminPageModule {}
