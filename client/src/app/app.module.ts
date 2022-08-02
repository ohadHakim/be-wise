import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LecturersModule } from './lecturers/lecturers.module';
import { HttpClientModule } from '@angular/common/http';
import { CoursesComponent } from './courses/courses.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, CoursesComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    LecturersModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
