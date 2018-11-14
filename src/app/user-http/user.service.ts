import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Profile } from '../profile';
import { GitSearch} from '../gitsearch';

@Injectable()
export class UserRequestService {
  profile: Profile;
  gitsearch: GitSearch;

  constructor(private http: HttpClient) {
    this.profile = new Profile('', '', '', '');
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
      followers: any;
      following: any;
    }
    const promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(environment.apiUrl)
        .toPromise()
        .then(
          data => {
            (this.profile.prof = data.avatar_url),
              (this.profile.user = data.login);
            this.profile.followers = data.followers;
            this.profile.following = data.following;
            resolve();
          },
          error => {
            this.profile.prof = 'avatar_url';
            this.profile.user = 'mutheud';
            this.profile.followers = '2';
            this.profile.following = '3';
            reject(error);
          }
        );
    });
    return Promise;
  }
}
