import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import {UpdateService} from '../services/update.service';
import {HttpService} from '../services/http.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() data:any;
  info:any;
updateData:any;
updateData1:any;
pinupID:any


myForm: FormGroup;
  constructor(private update:UpdateService,private http: HttpService) {

    this.myForm = new FormGroup({
        'imageUrl': new FormControl('',Validators.required),
        'tags': new FormControl('',Validators.required),
      'selectpicker':new FormControl('', Validators.required),
      'title': new FormControl(''),
      'link':new FormControl('', Validators.required),
      'description':new FormControl('', Validators.required),

    });

  }



  private showMessage;
  onNotifyClicked(message:string){
    console.log(message);
   this.showMessage=message;

  }
  ngOnInit() {
    // console.log('success -->',this.data);
    // this.pinupID=this.data;
    // this.update.getData(this.pinupID)
    //   .subscribe(
    //   (data) => {
    //     let myData = data;
    //     console.log(data);
    //     this.info = data;
    //     console.log(this.info.pinupData[0]);
    //     this.updateData = this.info.pinupData;
    //     console.log(this.updateData)
        // this.updateData1= this.updateData.like;
        // console.log(this.updateData1);
  console.log('success -->',this.data);
    this.updateData=this.data;
    console.log(this.updateData);
    }
  onSubmit(){
    console.log("hiiiii",this.myForm.value);
    this.update.sendData(this.myForm.value).subscribe(data=>{
      console.log(data)
    }
    )
    console.log(this.myForm.value)
  }

}
