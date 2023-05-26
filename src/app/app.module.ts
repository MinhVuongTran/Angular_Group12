import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SplitterModule } from 'primeng/splitter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelModule } from 'primeng/panel';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { SlideMenuModule } from 'primeng/slidemenu';
import { GalleriaModule } from 'primeng/galleria';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { SliderComponent } from './components/slider/slider.component';
import { SliderService } from './services/slider/slider.service';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/notFound/notFound.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { SiteLayoutComponent } from './components/layouts/siteLayout/siteLayout.component';
import { AdminLayoutComponent } from './components/layouts/adminLayout/adminLayout.component';
import { BannerComponent } from './components/banner/banner.component';
import { DialogService } from 'primeng/dynamicdialog';
import { ReProCateComponent } from './components/reProCate/reProCate.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    SliderComponent,
    ProductsComponent,
    ProductDetailComponent,
    SiteLayoutComponent,
    AdminLayoutComponent,
    BannerComponent,
    ReProCateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MenubarModule,
    AvatarModule,
    TabMenuModule,
    InputTextModule,
    BadgeModule,
    DialogModule,
    ButtonModule,
    SlideMenuModule,
    GalleriaModule,
    CardModule,
    CarouselModule,
    SplitterModule,
    PanelModule,
    BrowserAnimationsModule
  ],
  providers: [SliderService,DialogService],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
