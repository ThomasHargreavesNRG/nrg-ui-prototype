import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSidenavModule,MatIconModule,MatTabsModule, MatListModule, MatButtonModule, MatTableModule, MatFormFieldModule, MatInputModule, MatSortModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NrgDataTableComponent } from './nrg-data-table/nrg-data-table.component';


@NgModule({
  declarations: [
    AppComponent,
    NrgDataTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
