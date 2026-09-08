import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot } from '@angular/router';

const PUBLIC_ORIGIN = 'https://www.xpsystech.com';

interface SeoRouteSnapshot {
  readonly data: Readonly<Record<string, unknown>>;
  readonly firstChild: ActivatedRouteSnapshot | null;
  readonly title?: string;
}

@Injectable({ providedIn: 'root' })
export class Seo {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  apply(route: SeoRouteSnapshot, navigationUrl: string): void {
    const activeRoute = this.deepestRoute(route);
    const pageTitle = activeRoute.title;
    const description = activeRoute.data['description'];

    if (typeof pageTitle === 'string' && pageTitle.trim().length > 0) {
      this.title.setTitle(pageTitle);
    }

    if (typeof description === 'string' && description.trim().length > 0) {
      this.meta.updateTag({ name: 'description', content: description });
    }

    this.setCanonical(this.canonicalFor(navigationUrl));
  }

  canonicalFor(navigationUrl: string): string {
    const path = navigationUrl.split(/[?#]/, 1)[0] || '/';
    const normalizedPath = path === '/' ? '/' : path.replace(/\/+$/, '');
    return `${PUBLIC_ORIGIN}${normalizedPath.startsWith('/') ? normalizedPath : `/${normalizedPath}`}`;
  }

  private deepestRoute(route: SeoRouteSnapshot): SeoRouteSnapshot {
    let current = route;
    while (current.firstChild) {
      current = current.firstChild;
    }
    return current;
  }

  private setCanonical(url: string): void {
    let canonical = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.appendChild(canonical);
    }
    canonical.href = url;
  }
}
