import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LecturersComponent } from './lecturers/lecturers.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ParseSourceFile } from '@angular/compiler';

@NgModule({
  declarations: [LecturersComponent, ProfileCardComponent],
  imports: [CommonModule],
  exports: [LecturersComponent, ProfileCardComponent, ProfileCardComponent],
})
export class LecturersModule {}
