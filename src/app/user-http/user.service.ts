
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Profile } from '../profile';
import { ProfileComponent } from '../profile/profile.component';

@Injectable()

export class UserRequestService {
  profile: Profile;


  constructor(private http: HttpClient) {
    this.profile = new Profile('', '');
  }

  userRequest() {
    interface ApiResponse {
      data: any;
      login: any;
      avatar_url: any;
      full_name: string;
      description: string;
      length: any;
      html_url: any;
    }
    const promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(data => {
        this.profile.profile = data.avatar_url,
          this.profile.user = data.login;
        resolve();
      },
        error => {
          this.profile.profile = 'avatar_url';
          this.profile.user = 'BrianNgeno';
          reject(error);
        });
    });
    return Promise;
  }
}
