import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionTreeComponent } from './action-tree/action-tree.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActionDetailComponent } from './action-detail/action-detail.component';

const routes: Routes = [
{ path: 'actions', component: ActionTreeComponent },
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: 'detail/:id', component: ActionDetailComponent },
{ path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 
}
