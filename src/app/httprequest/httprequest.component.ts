import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-httprequest',
  templateUrl: './httprequest.component.html',
  styleUrls: ['./httprequest.component.scss']
})
export class HttprequestComponent {

  public getJsonValue:any;
  public getJsonSingleValue:any;
  public postJsonValue:any;

  constructor(private http : HttpClient){}

  ngOnInit():void{
    this.getMethod();
  }

  public getMethod(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data) => {
      console.log(data);
      this.getJsonValue = data;
      
    });
    this.http.get('https://jsonplaceholder.typicode.com/users/1').subscribe((data2) => {
      console.log(data2);
      this.getJsonSingleValue = data2;
  });

  }
}


