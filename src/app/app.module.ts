import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './shared/star/star.component';
import { WelcomeComponent } from './home/welcome.component';
// Pipes
import { ConvertToSpacesPipe } from './pipes/convert-to-spaces.pipe';
import { ProductDetailComponent } from './products/product-detail.component';
import { RouterModule } from '@angular/router';
// Guards
import { ProductDetailGuard } from './products/product-detail.guard';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    ProductListComponent,
    StarComponent,
    WelcomeComponent,
    // Pipes
    ConvertToSpacesPipe,
    ProductDetailComponent
    // Directives
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate:[ProductDetailGuard], component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  bootstrap: [AppComponent,
              ProductListComponent]
})
export class AppModule { }
