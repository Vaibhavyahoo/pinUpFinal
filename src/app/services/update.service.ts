import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';

@Injectable()
export class UpdateService {
public myId:any;
  constructor(private http:Http) { }
  private baseUrl ='http://192.168.0.54:3000';

  public token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsidXNlcm5hbWUiOiJpbml0IiwiaXNEZWxldGVkIjoiaW5pdCIsIl9fdiI6ImluaXQiLCJlbWFpbEFkZHJlc3MiOiJpbml0IiwicGFzc3dvcmQiOiJpbml0IiwiX2lkIjoiaW5pdCJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnsiX192Ijp0cnVlLCJpc0RlbGV0ZWQiOnRydWUsImVtYWlsQWRkcmVzcyI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsInVzZXJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsiaXNEZWxldGVkIjpmYWxzZSwiX192IjowLCJlbWFpbEFkZHJlc3MiOiJhbWl0MTIzQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiYW1pdEAxMjMiLCJ1c2VybmFtZSI6ImFtaXQiLCJfaWQiOiI1OGNhMDMwNzExYWZkZTRiN2FmMjU2MmIifSwiaWF0IjoxNDg5ODEyODE3LCJleHAiOjE0ODk4OTkyMTd9.p03oDgS6kARgmEwWXpVe8NpJxeQODsouxQ3JdIYiKtk";


  getData(id){
    this.myId=id;
    const headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('x-token',this.token);

     return this.http.get(this.baseUrl+'/admin/editPinup/'+id,{ headers:headers})
        .map((response:Response) => response.json());

}


  sendData(user:any){
  //  var body =user;
  console.log(user);
console.log(this.myId)
let id=this.myId;
let updateData={
 'pinupID':id,
  'tags':user.tags,
  'imageUrl':user.imageUrl,
  'title':user.title,
  'description':user.description,
  'link':user.pinupUrl
}
console.log(updateData)
  const headers = new Headers();
  headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('x-token',this.token);
  return this.http.post(this.baseUrl+'/admin/updatePinup', updateData,{ headers:headers});

}
}
