import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { StockService } from '../../services/stock.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stockdetails',
  templateUrl: './stockdetails.component.html',
  styleUrls: ['./stockdetails.component.css']
})
export class StockdetailsComponent implements OnInit {
  public stock:Stock;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data:{stock:Stock})=>{
      this.stock=data.stock;
    });
  }

}
