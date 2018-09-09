import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public username: string = '';
  public password: string = '';

  public message: string = '';
  constructor(private userService:UserService,private router:Router) { }
  register(){
    this.userService.register(this.username,this.password).subscribe(res=>{
      console.log('Successfully registered');
      this.message=res.msg;
      this.router.navigate(['login']);
      
    },err=>{
      console.error('Error registering', err);
      this.message = err.error.msg;
    
    })
  }
  ngOnInit() {
  }

}
