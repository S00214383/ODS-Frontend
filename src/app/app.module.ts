import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { albumComponent } from './album/album.component';
import { albumListComponent } from './album/album-list/album-list.component';
import { albumRowComponent } from './album/album-row/album-row.component';
import { albumDetailsComponent } from './album/album-details/album-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { albumFormComponent } from './album/album-form/album-form.component';
import { HttpClientModule } from  '@angular/common/http';

import { SearchComponent } from './search/search.component';




@NgModule({
  declarations: [
    AppComponent, 
    albumComponent, 
    albumRowComponent, 
    albumDetailsComponent,
    albumListComponent,
    albumFormComponent,
    SearchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
