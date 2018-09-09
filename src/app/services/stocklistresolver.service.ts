import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Stock } from '../model/stock';
import { Observable } from 'rxjs';
import { StockService } from './stock.service';

@Injectable({
  providedIn: 'root'
})
export class StocklistresolverService implements Resolve<Stock[]>{
  resolve(
         route: ActivatedRouteSnapshot,
       state: RouterStateSnapshot
      ): Observable<Stock[]>|Promise<Stock[]>|Stock[] {
        return this.stockService.getStocks("");
       }
  constructor(private stockService:StockService) {

   }
}
