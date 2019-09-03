import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DetailsComponent } from './details/details.component';
import { PlaylistComponent } from './playlist/playlist.component';
//import { PageNotFoundComponent } from './page';


const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full'},
{path:'home',component: EmployeeListComponent},
{path: 'details/:id', component: DetailsComponent},
{path: 'playlist', component: PlaylistComponent}
//{path: "**", component: PageNotFoundComponent}];
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DetailsComponent,EmployeeListComponent];
