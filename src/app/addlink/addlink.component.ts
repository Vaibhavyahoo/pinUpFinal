import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MaterialModule } from '@angular/material';
import {HttpService} from '../services/http.service';
import {UpdateService} from '../services/update.service'

@Component({
  selector: 'app-addlink',
  templateUrl: './addlink.component.html',
  styleUrls: ['./addlink.component.css']
})
export class AddlinkComponent implements OnInit {
  public myPinupData;

 myId: string="something";


  constructor(private http: HttpService, private update: UpdateService) { }
  ngOnInit() {
    this.http.getData()
      .subscribe(
      (data) => {
        let myData = data;

        console.log(myData.pinupData)
        this.myPinupData = myData.pinupData;  //json() extract the data instead of use in service
        console.log(this.myPinupData)  //all obect

      })

  }
  Title: string;
  information: any = [];
  date = new Date();

  addInfo(data) {
    this.http.sendData(data);
    console.log(data);

    this.information.push(data);
}




}
