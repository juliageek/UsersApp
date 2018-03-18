import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserDataService } from '../../services/user-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {
  user: User;

  constructor(private userService: UserDataService, public router: Router, private tostr: ToastrService) { }

  ngOnInit() {
    this.userService.getAllUsers();
    this.resetForm();
  }

  resetForm(addUserForm?: NgForm) {
    if (addUserForm != null){
      addUserForm.reset();
    }
    this.user = {
      name: '',
      job: ''
    };
  }

  onSubmit(addUserForm: NgForm) {
    console.log(addUserForm.value);
    this.userService.addUser(addUserForm.value)
    .subscribe(
      res => this.tostr.success(`User created successfully: ${res.name}, ${res.job}`, 'User admin panel'),
      err => console.log('Error ::' + err)
    )
    this.router.navigateByUrl('/home');
  }

  onCancelClick() {
     this.resetForm();
     this.router.navigateByUrl('/home');
  }
}
