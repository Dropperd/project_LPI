import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from "ng-apexcharts";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { FormsModule } from "@angular/forms";
 import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
 import { 
	IgxCategoryChartModule,
	IgxLegendModule
 } from "igniteui-angular-charts";
 
 import { AreaChart } from "./AreaChartComponent/AreaChart.component";

@NgModule({
  declarations: [
    AppComponent,
    AreaChart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
	  FormsModule,
  	IgxCategoryChartModule,
  	IgxLegendModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
