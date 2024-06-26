import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ListingModule } from './listing/listing.module';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { AppInterceptorProvider } from './app.interceptor';
import { AuthActivate} from './guards/auth.activate';
import { IsLoggedInGuard } from './guards/isLogged.activate';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AuthenticateComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    ListingModule,
    AppRoutingModule
  ],
  providers: [AppInterceptorProvider, IsLoggedInGuard, AuthActivate],
  bootstrap: [AppComponent]
})
export class AppModule { }