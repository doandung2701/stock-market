import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private _token:string=null;
  constructor() { }
  
  public set token(v : string) {
    this._token = v;
  }
  
  public get token() : string {
    return this._token;
  }
  isLoggedIn(){
    return this.token!=null;
  }
  
}
