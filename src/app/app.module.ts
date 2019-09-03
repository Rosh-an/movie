import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent, SafePipe } from './employee-list/employee-list.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { PlaylistComponent } from './playlist/playlist.component';
//import { DetailsComponent,EmployeeListComponent} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    EmployeeListComponent,
    routingComponents,
    DetailsComponent,
    PlaylistComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
