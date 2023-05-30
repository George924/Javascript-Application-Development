import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ApiService} from './api.service';
import { FooterComponent } from './footer/footer.component';
import { ProfilComponent } from './profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    NavbarComponent,
    FooterComponenet,
    ProfitComponenet,
    FooterComponent,
    ProfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    HttpClientModule
    FormsModule,
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
