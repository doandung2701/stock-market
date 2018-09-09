import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { StockService } from './services/stock.service';
import { MessageService } from './services/message.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthService } from './services/auth.service';
import { StockAppInterceptor } from './services/stock-app.interceptor';
import { AppRoutesModule } from './/app-routes.module';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { StockdetailsComponent } from './stock/stockdetails/stockdetails.component';
import { AuthGuard } from './guards/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    CreateStockComponent,
    StockListComponent,
    LoginComponent,
    RegisterComponent,
    StockdetailsComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule, AppRoutesModule
  ],
  providers: [AuthGuard,StockService,MessageService,AuthService,{
    provide:HTTP_INTERCEPTORS,
    useClass:StockAppInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
