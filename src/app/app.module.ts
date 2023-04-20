import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';

import { NgApexchartsModule } from "ng-apexcharts";
import { AreaChartComponent } from './area-chart/area-chart.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    AreaChartComponent,
    ColumnChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
