import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';



@Pipe({ name: 'safe' })

export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styles: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  trending=false;
  searching=false;
  public text="";
  public com;
  public list= [];
  public url2 ="https://www.youtube.com/embed/";
  public source=[];
  public fav={
    vidId:"",
    id:""
  }
  constructor(private _employeeService: EmployeeService) { }
  ngOnInit() {
    this.trending=true;
    this.searching=false;
    this._employeeService.getEmployees()
     .subscribe(data => this.list=data);
     //console.log(this.list);
  }


  fireEvent(val)
  {
    this.searching=true;
    this.trending=false;
    this.text=val;
    //console.log(this.text);
    this._employeeService.getsearch(val).subscribe(data => this.list=data)
    //console.log(this.list);
  }

  playlist(val1,val2)
  {
    let com=window.prompt("Video added to playlist");
    this._employeeService.list(val1,val2,com);
      }

  /*showplaylist()
  {
    this._employeeService.showlist();
  }*/



  

  

 
 
  //getsearch(){
    //return this.text;
  //}
  
      
          //  .catch(this.errorHandler);
  

  
 
}



