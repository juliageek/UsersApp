import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UserDataService } from '../../services/user-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList: User[];

  constructor(private userService: UserDataService, public router: Router, private tostr: ToastrService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  goToForm() {
    this.router.navigateByUrl('/userform');
  }

  getAllUsers(): void {
    this.userService.getAllUsers()
      .subscribe(
        res => this.userList = res.data,
        err => console.log('Error ::' + err)
      );
  }

}
