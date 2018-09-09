import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { StockService } from '../../services/stock.service';
import { Observable, Subject } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { share, startWith, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css'],
})
export class StockListComponent implements OnInit {
  public stocks$:Stock[];
  public searchString:string='';
  private searchTerms:Subject<string>=new Subject();
  private page = 1;
  constructor(private authService:AuthService,private route:ActivatedRoute,private router:Router,private stockService:StockService) {
   }

  ngOnInit() {
    console.log("Page No.:",this.route.snapshot.queryParamMap.get('page'));
    this.route.data.subscribe((data:{stocks:Stock[]})=>{
      this.stocks$=data.stocks;
    })    
    this.searchTerms.pipe(
      startWith(this.searchString),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query)=>this.stockService.getStocks(query)),
      share()
    ).subscribe((data)=>{
      this.stocks$=data;
    })
  }
  // fetchStocks(){
  //   this.stocks$=this.stockService.getStocks(this.searchString).pipe(share());
  // }
  // setAuthToken(){
  //   this.authService.authToken="TESTING";
  // }
  // resetAuthToken(){
  //   this.authService.authToken=null;
  // }
  // makeFallingCall(){
  //   this.stockService.makeFallingCall().subscribe(res=>console.log('Successfully made failing call', res),err=>console.log("Error making failing call",err));
    
  // }
  search(){
    this.searchTerms.next(this.searchString);
  }
  nextPage(){
    this.router.navigate([],{
      queryParams:{
        page:++this.page
      }
    })
  }
}
