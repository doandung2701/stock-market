import { Injectable } from '@angular/core';
import { Stock } from '../model/stock';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class StockService {
  constructor( private http:HttpClient) { 

  }
  getStock(code: string): Observable<Stock> {
    return this.http.get<Stock>('/api/stock/' + code);
  }
  getStocks(query:string):Observable<Stock[]>{
    return this.http.get<Stock[]>(`/api/stock?q=${query}`);
  }
  createStock(stock:Stock):Observable<any>{
    return this.http.post('/api/stock',stock);
  }
  toggleFavorite(stock: Stock): Observable<any> {
    return this.http.patch<Stock>('/api/stock/' + stock.code,
      {
        favorite: !stock.favorite
      });
  }
  makeFallingCall(){
    return this.http.get("/api/fail");
  }

}
