import { Component, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { HeaderAdminComponent } from '../../header-admin/header-admin.component';
import { AdminLayoutService } from 'src/app/services/admin-layout/adminLayout.service';
import { SidebarAdminComponent } from '../../sidebar-admin/sidebar-admin.component';
@Component({
  selector: 'app-adminLayout',
  templateUrl: './adminLayout.component.html',
  styleUrls: ['./adminLayout.component.scss'],
})
export class AdminLayoutComponent implements OnDestroy {
  overlayMenuOpenSubscription: Subscription;

  menuOutsideClickListener: any;

  profileMenuOutsideClickListener: any;

  @ViewChild(SidebarAdminComponent) adminSidebar!: SidebarAdminComponent;

  @ViewChild(HeaderAdminComponent) adminHeader!: HeaderAdminComponent;

  constructor(
    public adminLayoutService: AdminLayoutService,
    public renderer: Renderer2,
    public router: Router
  ) {
    this.overlayMenuOpenSubscription =
      this.adminLayoutService.overlayOpen$.subscribe(() => {
        if (!this.menuOutsideClickListener) {
          this.menuOutsideClickListener = this.renderer.listen(
            'document',
            'click',
            (event) => {
              const isOutsideClicked = !(
                this.adminSidebar.el.nativeElement.isSameNode(event.target) ||
                this.adminSidebar.el.nativeElement.contains(event.target) ||
                this.adminHeader.menuButton.nativeElement.isSameNode(
                  event.target
                ) ||
                this.adminHeader.menuButton.nativeElement.contains(event.target)
              );

              if (isOutsideClicked) {
                this.hideMenu();
              }
            }
          );
        }

        if (!this.profileMenuOutsideClickListener) {
          this.profileMenuOutsideClickListener = this.renderer.listen(
            'document',
            'click',
            (event) => {
              const isOutsideClicked = !(
                this.adminHeader.menu.nativeElement.isSameNode(event.target) ||
                this.adminHeader.menu.nativeElement.contains(event.target) ||
                this.adminHeader.topbarMenuButton.nativeElement.isSameNode(
                  event.target
                ) ||
                this.adminHeader.topbarMenuButton.nativeElement.contains(
                  event.target
                )
              );

              if (isOutsideClicked) {
                this.hideProfileMenu();
              }
            }
          );
        }

        if (this.adminLayoutService.state.staticMenuMobileActive) {
          this.blockBodyScroll();
        }
      });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.hideMenu();
        this.hideProfileMenu();
      });
  }

  hideMenu() {
    this.adminLayoutService.state.overlayMenuActive = false;
    this.adminLayoutService.state.staticMenuMobileActive = false;
    this.adminLayoutService.state.menuHoverActive = false;
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
      this.menuOutsideClickListener = null;
    }
    this.unblockBodyScroll();
  }

  hideProfileMenu() {
    this.adminLayoutService.state.profileSidebarVisible = false;
    if (this.profileMenuOutsideClickListener) {
      this.profileMenuOutsideClickListener();
      this.profileMenuOutsideClickListener = null;
    }
  }

  blockBodyScroll(): void {
    if (document.body.classList) {
      document.body.classList.add('blocked-scroll');
    } else {
      document.body.className += ' blocked-scroll';
    }
  }

  unblockBodyScroll(): void {
    if (document.body.classList) {
      document.body.classList.remove('blocked-scroll');
    } else {
      document.body.className = document.body.className.replace(
        new RegExp(
          '(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)',
          'gi'
        ),
        ' '
      );
    }
  }

  get containerClass() {
    return {
      'layout-theme-light':
        this.adminLayoutService.config.colorScheme === 'light',
      'layout-theme-dark':
        this.adminLayoutService.config.colorScheme === 'dark',
      'layout-overlay': this.adminLayoutService.config.menuMode === 'overlay',
      'layout-static': this.adminLayoutService.config.menuMode === 'static',
      'layout-static-inactive':
        this.adminLayoutService.state.staticMenuDesktopInactive &&
        this.adminLayoutService.config.menuMode === 'static',
      'layout-overlay-active': this.adminLayoutService.state.overlayMenuActive,
      'layout-mobile-active':
        this.adminLayoutService.state.staticMenuMobileActive,
      'p-input-filled': this.adminLayoutService.config.inputStyle === 'filled',
      'p-ripple-disabled': !this.adminLayoutService.config.ripple,
    };
  }

  ngOnDestroy() {
    if (this.overlayMenuOpenSubscription) {
      this.overlayMenuOpenSubscription.unsubscribe();
    }

    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
    }
  }
}
