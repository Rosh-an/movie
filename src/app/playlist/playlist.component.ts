import { Component, OnInit } from '@angular/core';
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
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  constructor(private _employeeService: EmployeeService) { }
  public obj;
  public temp="gHGDN9-oFJE";
  public url="https://www.youtube.com/embed/";
  ngOnInit() {
    this._employeeService.getfav()
     .subscribe(data => this.obj=data);
  }

  remlist(val)
  {
    this._employeeService.remove(val);
  }

  init(n)
  {
    this.temp=n;
    console.log(n);
    //window.location.reload();
  }
  editcom(m,n,o)
  {
    let v=prompt("Enter new comment");
    this._employeeService.editcomment(m,n,o,v);
    window.location.reload();
  }

}
