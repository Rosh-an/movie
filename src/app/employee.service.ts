import { Injectable } from '@angular/core';
import {Video} from './videos'
import { Observable } from 'rxjs'; 
import { Options } from 'selenium-webdriver/ie';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
//import { EmployeeListComponent} from './employee-list/employee-list.component'   



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  public search="batman";
 
   

  private _url: string= "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=AIzaSyC3O2R6oRXe96ofJ9DtYcXZS9toP5I_1XM";

  constructor(private http: HttpClient/*, _employeelist: EmployeeListComponent*/) { }

  getEmployees(): Observable<Video[]>{

    //this._employeelist.getsearch()
     // .subscribe(data => this.search=data);

    return this.http.get<Video[]>(this._url);
      
          //  .catch(this.errorHandler);
  }

  getsearch(searchTerm){
    console.log(searchTerm);
    let _url1: string= "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q="+searchTerm+"&key=AIzaSyC3O2R6oRXe96ofJ9DtYcXZS9toP5I_1XM";
    return this.http.get<Video[]>(_url1);
  }

  getdetail(searchId){
    console.log(searchId);
    let _urlid:string= "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="+searchId+"&key=AIzaSyC3O2R6oRXe96ofJ9DtYcXZS9toP5I_1XM";
    return this.http.get<any[]>(_urlid);
    
  }

  public play={
    vidId:"",
    title:"",
    comment:""
  };

  list(vidId,title,com)
  {
    //console.log(id);
    console.log(vidId);
    //this.playlist.id=id;
    this.play.vidId=vidId;
    this.play.title=title;
    this.play.comment=com;
    let _url1: string= "http://localhost:3000/playlist";
    return this.http.post(_url1,this.play).toPromise();

  }

  getfav()
  {
    return this.http.get("http://localhost:3000/playlist");
  }



  remove(val)
  {
    console.log(val);
    console.log("http://localhost:3000/playlist/"+val);
    //this.http.delete("http://localhost:3000/playlist/"+val);
    
    //delete this.play[val-1];
    //let _url1: string= "http://localhost:3000/playlist";
    //return this.http.post(_url1,this.play).toPromise();

    this.http.request('delete',"http://localhost:3000/playlist/"+val)
    .subscribe();
    window.location.reload();
    alert("Video removed from playlist");
  }
    
  editcomment(m,n,o,v)
  {
    this.play.comment=v;
    this.play.title=n;
    this.play.vidId=m;
    console.log(o);
    let _url1: string= "http://localhost:3000/playlist";
    return this.http.put("http://localhost:3000/playlist/"+o,this.play).toPromise();
    window.location.reload();
  }
  
  
/*errorHandler( error: HttpErrorResponse){
    return Observable.throw(error.message ||s "Server Error");
  }
}
*/

}
