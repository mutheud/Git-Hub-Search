import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../profile';
import {Repo} from '../repo';
import { environment } from '../../environments/environment';
import { UserRequestService } from '../user-http/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserRequestService]
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  repo: Repo;
  repositories = [];
  constructor(
    private http: HttpClient, private userService: UserRequestService) {}

  ngOnInit() {
    this.userService.userRequest();
    this.profile = this.userService.profile;


    interface ApiResponse {
      data: any;
      login: any;
      avatar_url: any;
      full_name: string;
      description: string;
      length: any;
      html_url: any;
    }
    this.http.get<ApiResponse>('https://api.github.com/users/mutheud/repos?access_token=b7bdc05423b52964c13082b851e08729895908e5')
      .subscribe(data => {
        for (let index = 0; index < data.length; index++) {
          this.repositories.push(this.repo = new Repo(data[index]));
        }
      });
  }
}
