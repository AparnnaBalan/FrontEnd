import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackEndServiceService {

  constructor(private http:HttpClient) { }

  login(loginInfo:Array<string>){



    return this.http.post("https://localhost:44380/api/Registeration/LoginUser",{

    UserName:loginInfo[0],

    Password:loginInfo[1],

  },



  {

    responseType:'text',

  });
}

  insertregistrationdata(data:any) {

     this.http.post('https://localhost:44380/api/Registeration/insertregistrationdata',data).toPromise().then(result =>

     {console.log(result);}),window.alert('Registered Successfully'),window.location.href='/Login'



    }
    fileupload(data:any) {

      this.http.post('https://localhost:44380/api/Registeration/fileupload',data).toPromise().then(result =>

      {console.log(result);}),window.alert('file uploaded')

 

     }

}