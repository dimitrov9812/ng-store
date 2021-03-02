// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './products/product.module';
import { RoutingModule } from './routing/routing.module';

// Components
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    // Pipes
    // Directives
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // Feature Modules
    ProductModule,
    // Routing
    RoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
