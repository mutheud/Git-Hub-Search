import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../profile';
import { UserRequestService } from '../user-http/user-request.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserRequestService],
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.profile = this.userService.profile;
  }
}
