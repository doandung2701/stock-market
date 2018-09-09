import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { StockdetailsComponent } from './stock/stockdetails/stockdetails.component';
import { AuthGuard } from './guards/auth.guard';
import { DeactivateGuardGuard } from './guards/deactivate-guard.guard';
import { StockloadresolverService } from './services/stockloadresolver.service';
import { StocklistresolverService } from './services/stocklistresolver.service';
const appRoutes:Routes=[
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'stocks/list',component:StockListComponent,canActivate:[AuthGuard],resolve:{stocks:StocklistresolverService}},
  {path:'stocks/create',component:CreateStockComponent,canActivate:[AuthGuard],canDeactivate:[DeactivateGuardGuard]},
  {path:'stocks/:code',component:StockdetailsComponent,canActivate:[AuthGuard],resolve:{stock:StockloadresolverService}},
  {path:'**',redirectTo:'/register'}
]
@NgModule({
  
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  
})
export class AppRoutesModule { }
