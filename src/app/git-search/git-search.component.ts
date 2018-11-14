import { Component, OnInit } from '@angular/core';
import { GitSearch} from '../gitsearch';
import { HttpClient } from '@angular/common/http';
import { UserRequestService } from '../user-http/user.service';
import {environment} from '../../environments/environment';
import { Profile } from '../profile';
import { User } from '../user';


@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css'],
  providers: [UserRequestService],
})
export class GitSearchComponent implements OnInit {
  user: User;
  profile: Profile;
  gitsearch: GitSearch;
  searchs = [];
  constructor(private http: HttpClient) { }
  User = new User('');

  Search(get) {
    this.http.get<object>('https://api.github.com/users/' + get.value + '?access_token=b7bdc05423b52964c13082b851e08729895908e5')
      .subscribe(source => {
        this.user = new User(source);
        console.log(this.user.search);
      });
    interface Object {
      length: any;
    }
    this.http.get<Object>('https://api.github.com/users/' + get.value + '/repos')
      .subscribe(any => {
        for (let index = 0; index < any.length; index++) {
          this.searchs.push((this.gitsearch = new GitSearch (any[index])));
          console.log(any[index]);
        }
      });
  }

  ngOnInit() {

  }
}
