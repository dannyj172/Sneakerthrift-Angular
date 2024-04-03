import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { EmailDirective } from './validators/email.directive';
import { SlicePipe } from './pipes/slice.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';
import { RouterModule } from '@angular/router';
import { ImageDirective } from './validators/image.directive';



@NgModule({
  declarations: [
    LoaderComponent,
    EmailDirective,
    SlicePipe,
    ElapsedTimePipe,
    ImageDirective
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports: [
    LoaderComponent,
    EmailDirective,
    SlicePipe,
    ElapsedTimePipe,
    ImageDirective
  ]
})
export class SharedModule { }
