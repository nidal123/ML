import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NLPComponent } from './nlp/nlp.component'
import { HomeComponent } from './home/home.component'
import { ImprocComponent } from './improc/improc.component';
import { TimeseriesComponent } from './timeseries/timeseries.component';

const routes: Routes = [
  { path: 'nlp', component: NLPComponent },
  { path: 'cv', component: ImprocComponent },
  { path: 'ts', component: TimeseriesComponent },
  { path: '',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
