import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/Login.component';
import { HomeComponent } from './Home/Home.component';
import { AddTaskComponent } from './AddTask/AddTask.component';
import { SearchComponent } from './search/search.component';
import { TaskBoardComponent } from './TaskBoard/TaskBoard.component';
import { NotesComponent } from './Notes/Notes.component';
import { ProfileComponent } from './profile/profile.component';
import { PerformanceEvaluationComponent } from './PerformanceEvaluation/PerformanceEvaluation.component';

@NgModule({
  declarations: [								
    AppComponent,
      LoginComponent,
      HomeComponent,
      AddTaskComponent,
      SearchComponent,
      TaskBoardComponent,
      NotesComponent,
      ProfileComponent,
      PerformanceEvaluationComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
