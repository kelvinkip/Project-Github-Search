import { Injectable } from '@angular/core';
// import { userName } from '../username';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/internal/operators/map';
// import { BrowserModule } from '@angular/platform-browser'


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private userName: string;
  constructor(private http: HttpClient) { 
    this.userName = "kelvinkip"
  }
  GetProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.userName).pipe(map(data => {
      return data;
    }));
     
  };
  GetProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.userName + "/repos?api_key=" + environment.apiKey).pipe(map(data => {
      return data
    }));
  }
  getUsername(userName: string) {
    this.userName = userName;
  }
}
