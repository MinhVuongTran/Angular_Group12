import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';
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
import { DialogService } from 'primeng/dynamicdialog';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

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
import { ReProCateComponent } from './components/reProCate/reProCate.component';
import { ProductComponent } from './components/product/product.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductAdminComponent } from './pages/admin/product-admin/product-admin.component';

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
    ProductComponent,
    ProductDetailComponent,
    SiteLayoutComponent,
    AdminLayoutComponent,
    BannerComponent,
    ReProCateComponent,
    DashboardComponent,
    ProductAdminComponent,
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
    BrowserAnimationsModule,
    MenuModule,
    ToastModule,
    DropdownModule,
    DataViewModule,
    TableModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [SliderService, DialogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
