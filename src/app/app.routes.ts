import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';  // Import your Survey Component

export const routes: Routes = [
  { path: '', component: SurveyComponent },  // Default route loads the SurveyComponent
  { path: '**', redirectTo: '' }  // Wildcard route to redirect any undefined paths to the default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
