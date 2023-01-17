import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackEndServiceService {
 

  constructor(private http:HttpClient) { }

  login(loginInfo:Array<string>){



    return this.http.post("https://localhost:44336/api/Registration/LoginUser",{

    UserName:loginInfo[0],

    Password:loginInfo[1],

  },



  {

    responseType:'text',

  });
}

  insertregistrationdata(data:any) {

     this.http.post('https://localhost:44336/api/Registration/insertregistrationdata',data).toPromise().then(result =>

     {console.log(result);}),window.alert('Registered Successfully'),window.location.href='/Login'



    }
    fileupload(data:any) {

      this.http.post('https://localhost:44336/api/Registration/fileupload',data).toPromise().then(result =>

      {console.log(result);}),window.alert('file uploaded')

 

     }
     getvideoData()

    {

     return this.http.get<any>('https://localhost:44336/api/Registration/view')

    }
    contact(data:any) {

      this.http.post('https://localhost:44336/api/Registration/contact',data).toPromise().then(result =>

      {console.log(result);}),window.alert('Message Sent'), window.location.href='/userhome'

     }

     getComplaintsstatus()

    {

     return this.http.get<any>('https://localhost:44336/api/Registration/ViewC')

    }
    getUserData()

    {

     return this.http.get<any>('https://localhost:44336/api/Registration/ViewU')

    }
}