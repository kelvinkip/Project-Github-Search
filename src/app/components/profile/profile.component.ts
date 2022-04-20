import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public repo:any = []
  public user: any = [];
  public userName: string = "";
  constructor(private profileservice: ProfileService) { 
    this.profileservice.GetProfileInfo().subscribe((response: any) => {
      this.user = response;
      console.log(response);
    })
    this.profileservice.GetProfileRepos().subscribe((response: any) => {
      this.repo = response;
    })
  }
  findProfile() {
  this.profileservice.getUsername(this.userName)
  this.profileservice.GetProfileInfo().subscribe((response: any) => {
      this.user = response;
      console.log(response);
  })
  this.profileservice.GetProfileRepos().subscribe((response: any) => {
      this.repo = response;
    })
  }
  ngOnInit(): void {
  }
  

}
function getUserName() {
  throw new Error('Function not implemented.');
}