import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppLoadService {

  constructor(private httpClient: HttpClient) { }

  initializeApp(): Promise<any> {
    return new Promise((resolve, reject) => {
          console.log(`initializeApp:: inside promise`);

          setTimeout(() => {
            console.log(`initializeApp:: inside setTimeout`);           
            resolve();
          }, 3000);
        });
  }

  getSettings(): Promise<any> {
    console.log(`getSettings:: before http.get call`);
    
    const promise = this.httpClient.get('http://localhost:8080/api/patient/resetalarm')
      .toPromise()
      .then(data => {        
        return data;
      });

    return promise;
  }
}