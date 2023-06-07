import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';

import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { DialogService } from 'primeng/dynamicdialog';
import { GalleriaModule } from 'primeng/galleria';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { OverlayModule } from 'primeng/overlay';
import { TreeTableModule } from 'primeng/treetable';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterAdminComponent } from './components/footer-admin/footer-admin.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminLayoutComponent } from './components/layouts/adminLayout/adminLayout.component';
import { SiteLayoutComponent } from './components/layouts/siteLayout/siteLayout.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { ProductComponent } from './components/product/product.component';
import { ReProCateComponent } from './components/reProCate/reProCate.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { SliderComponent } from './components/slider/slider.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductAdminComponent } from './pages/admin/product-admin/product-admin.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/notFound/notFound.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductsComponent } from './pages/products/products.component';
import { RegisterComponent } from './pages/register/register.component';
import { SliderService } from './services/slider/slider.service';
import { CategoryAdminComponent } from './pages/admin/category-admin/category-admin.component';

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
    HeaderAdminComponent,
    FooterAdminComponent,
    SidebarAdminComponent,
    MenuAdminComponent,
    CategoryAdminComponent,
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
    ConfirmDialogModule,
    CommonModule,
    FileUploadModule,
    ProgressSpinnerModule,
    OverlayModule,
    TreeTableModule,
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [SliderService, DialogService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
