import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { Stock } from '../../model/stock';
import { StockService } from '../../services/stock.service';

@Component({
  selector: '.stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class StockItemComponent   {
 @Input() public stock: Stock;
 constructor(private stockService: StockService,private cd: ChangeDetectorRef) {}
 onToggleFavorite(event) {
   this.stockService.toggleFavorite(this.stock)
     .subscribe((stock) => {
       this.stock.favorite = !this.stock.favorite;
       this.cd.markForCheck();
       console.log(this.stock.favorite);
       
      });
 }
 
}
