import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SlideshowModule } from 'ng-simple-slideshow';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardsComponent } from './components/cards/cards.component';
import { BannersComponent } from './components/banners/banners.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { CookiesPolicyComponent } from './components/cookies-policy/cookies-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SliderComponent,
    CardsComponent,
    BannersComponent,
    TabsComponent,
    ContactFormComponent,
    FooterComponent,
    CookiesPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SlideshowModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
