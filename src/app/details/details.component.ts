import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { EmployeeService } from '../employee.service';

@Pipe({ name: 'safe' })

export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 




@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public text="";
  public listnew= [];
  public url3 ="https://www.youtube.com/embed/";
  constructor(private activateRoute: ActivatedRoute, private _employeeService: EmployeeService) { }
  ngOnInit() {
    let id= this.activateRoute.snapshot.paramMap.get('id');
    let url3=this.url3+id;
    this.text=url3;
    console.log(id);
    this._employeeService.getdetail(id).subscribe(data => this.listnew=data)
    
  }

  playlist1(val1,val2)
  {
    console.log(val1,val2);
    console.log(this.listnew);
    let com=window.prompt("Video added to playlist");
    this._employeeService.list(val1,val2,com);
  }

  
}
