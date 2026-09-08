import { DOCUMENT } from '@angular/common';
import { Component, DestroyRef, HostListener, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Event as RouterEvent, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { SiteFooter } from '../site-footer/site-footer';
import { SiteHeader } from '../site-header/site-header';
import { Seo } from '../../app/core/services/seo';

@Component({
  imports: [RouterOutlet, SiteFooter, SiteHeader],
  selector: 'app-page-shell',
  styleUrl: './page-shell.scss',
  templateUrl: './page-shell.html',
})
export class PageShell {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly seo = inject(Seo);

  protected readonly isNavigating = signal(false);
  protected readonly showScrollTop = signal(false);

  constructor() {
    this.router.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.isNavigating.set(true);
      }

      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.isNavigating.set(false);
      }

      if (event instanceof NavigationEnd) {
        this.seo.apply(this.router.routerState.snapshot.root, event.urlAfterRedirects);
      }
    });
  }

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    this.showScrollTop.set((this.document.defaultView?.scrollY ?? 0) > 480);
  }

  protected scrollToTop(): void {
    this.document.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
