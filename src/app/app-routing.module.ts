import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { ResultPageComponent } from './result-page/result-page.component';

const routes: Routes = [

  { path: 'app', component: AppComponent },
  // { path: 'result', component: ResultPageComponent },
  // { path: 'edit', component: EditPageComponent },
  // { path: 'common', component: CommonComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents=[ResultPageComponent,EditPageComponent,CommonComponent]; 
