import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { DevicesComponent } from './devices/devices.component';
import {CheckoutComponent} from "./checkout/checkout.component";
import {DescriptionComponent} from "./description/description.component";
import {CardInfoComponent} from "./card-info/card-info.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'devices', component: DevicesComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'card-info', component: CardInfoComponent },
  { path: 'devices/description/:id', component: DescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule{}
