import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackerComponent } from './tracker/tracker.component';
import { CreatorComponent } from './creator/creator.component';

const routes: Routes = [
  { path: 'tracker', component: TrackerComponent },
  { path: 'creator', component: CreatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
