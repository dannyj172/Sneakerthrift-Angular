import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { EmailDirective } from './validators/email.directive';
import { SlicePipe } from './pipes/slice.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoaderComponent,
    EmailDirective,
    SlicePipe,
    ElapsedTimePipe,],
  imports: [
    CommonModule,RouterModule
  ],
  exports: [
    LoaderComponent,
    EmailDirective,
    SlicePipe,
    ElapsedTimePipe
  ]
})
export class SharedModule { }
