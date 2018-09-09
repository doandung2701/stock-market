import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username:string='';
  public password:string='';
  public message:string='';
  constructor(private userService:UserService,private route:Router) { }
  login(){
    this.userService.login(this.username,this.password).subscribe(resp=>{
      console.log('Successfully logged in');
      this.message=resp.msg;
      this.route.navigate(['stocks','list'],{
        queryParams:{page:1}
      });
      
    },err=>{
      console.error('Error login in',err);
      this.message=err.error.msg;
      
    })
  }

  ngOnInit() {
  }

}
