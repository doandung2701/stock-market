import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { Stock } from '../../model/stock';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { StockService } from '../../services/stock.service';
import { MessageService } from '../../services/message.service';
import { Router } from '@angular/router';
let couter = 1;

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css'],
  providers:[MessageService]
})
export class CreateStockComponent {
  // public stock:Stock;
  // public confirmed=false;
  // public exchanges=['NYSE','NASDAQ','OTHER'];
  // public stockForm:FormGroup=new FormGroup({
  //   name:new FormControl(null,Validators.required),
  //   code:new FormControl(null,[Validators.required,Validators.minLength(2)]),
  //   price:new FormControl(null,[Validators.required,Validators.min(0)])
  // });
  public stock: Stock;
  public confirmed = false;
  public message = null;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
  @Output()
  public hidden: EventEmitter<string>;
  constructor(private stockService: StockService,private route:Router ) {

    this.initializeStock();
    this.hidden = new EventEmitter<string>();
  }
  initializeStock(){
    this.stock={
      name:'',
      code:'',
      price:0,
      previousPrice:0,
      exchange:'NASDAQ',
      favorite:false
    }
  }

  // }
  // createForm(){
  //   this.stockForm=this.fb.group({
  //     name:[null,Validators.required],
  //     code:[null,[Validators.required,Validators.minLength(2)]],
  //     price:[0,[Validators.required,Validators.min(0)]],
  //     notablePeople:this.fb.array([])
  //   })
  // }
  // get notablePeople():FormArray{
  //   return this.stockForm.get('notablePeople') as FormArray;
  // }
  // addNotablePerson(){
  //   this.notablePeople.push(this.fb.group({
  //     name:['',Validators.required],
  //     title:['',Validators.required]
  //   }));
  // }
  // removeNotablePerson(index:number){
  //   this.notablePeople.removeAt(index);
  // }
  // onSubmit(){
  //   this.stock = Object.assign({}, this.stockForm.value);
  //   console.log('Saving stock', this.stock);

  // }
  // loadStockFromServer(){
  //   this.stock = new Stock('Test ' + couter++, 'TST', 20, 10);
  //   let stockFromModel=Object.assign({},this.stock);
  //   delete stockFromModel.previousPrice;
  //   delete stockFromModel.favorite;
  //   this.stockForm.setValue(stockFromModel);
  // }
  // patchStockForm(){
  //   this.stock = new Stock(`Test ${couter++}`, 'TST', 20, 10);
  //   this.stockForm.patchValue(this.stock);
  // }
  // resetForm(){
  //   this.stockForm.reset();
  // }
  setStockPrice(price: number) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }
  createStock(stockForm) {

    if (stockForm.valid) {
    this.stockService.createStock(this.stock).subscribe((value:any)=>{
        this.message=value.msg;
        this.initializeStock();
        this.hidden.emit("hidden");
        this.route.navigate(['stocks','list'],{
          queryParams:{page:1}
        });
      },(err)=>{
        this.message=err.error.msg;
      });
    }
else {
        console.log("Stock form is in an invalid state");
        
      }
  }
}
