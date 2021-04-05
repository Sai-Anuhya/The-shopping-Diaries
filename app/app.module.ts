import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgpSortModule } from "ngp-sort-pipe";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { BabyandkidsComponent } from './babyandkids/babyandkids.component';
import { HomeandfurnitureComponent } from './homeandfurniture/homeandfurniture.component';

const appRoot: Routes = [{path:'', component: HomeComponent},
                        {path: 'electronics', component: ElectronicsComponent},
                        {path: 'appliances', component: AppliancesComponent},
                        {path: "men", component: MenComponent},
                        {path: "women", component: WomenComponent},
                        {path: "kids", component: BabyandkidsComponent},
                        {path: "homeandfurniture", component: HomeandfurnitureComponent},
                        {path: 'signUp', component: SignupComponent}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ElectronicsComponent,
    HeaderComponent,
    SignupComponent,
    AppliancesComponent,
    MenComponent,
    WomenComponent,
    BabyandkidsComponent,
    HomeandfurnitureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoot),
    NgpSortModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
