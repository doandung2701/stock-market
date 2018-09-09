import { Component, OnInit } from '@angular/core';
import { Stock } from './model/stock';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Stock Market App';
  public showAdd:boolean=false;
  ShowOrHidden:string="Add";
  show(){
    this.showAdd=!this.showAdd;
    if (this.showAdd) {
      this.ShowOrHidden="Close";
    }else{
      this.ShowOrHidden="Add";
    }
  }
  hiddenAdd(message){
    this.showAdd=false;
  }
}

