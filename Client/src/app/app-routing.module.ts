import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './components/layouts/adminLayout/adminLayout.component';
import { SiteLayoutComponent } from './components/layouts/siteLayout/siteLayout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductAdminComponent } from './pages/admin/product-admin/product-admin.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/notFound/notFound.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductsComponent } from './pages/products/products.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './auth.guard';
import { CategoryAdminComponent } from './pages/admin/category-admin/category-admin.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'product',
        component: ProductAdminComponent,
      },
      {
        path: 'category',
        component: CategoryAdminComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
    
  },
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent,
      },
      {
        path: 'products/:categorySlug/:subCategorySlug',
        component: ProductsComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
        // canActivate: [AuthGuard],
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
