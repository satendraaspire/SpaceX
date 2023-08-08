import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Toastr imports
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Router Import
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './layouts/header/header.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';

import { HttpClientModule } from '@angular/common/http';

//Dragon,Capsules,Landpads modules import
import { DragonModule } from './dragon/dragon.module';
import { CapsulesModule } from './capsules/capsules.module';
import { LandpadsModule } from './landpads/landpads.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    DragonModule,
    CapsulesModule,
    LandpadsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
