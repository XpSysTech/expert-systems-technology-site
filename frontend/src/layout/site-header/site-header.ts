import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

type DropdownMenuId = 'industries';

interface NavigationLink {
  readonly label: string;
  readonly path: string;
}

interface NavigationGroup extends NavigationLink {
  readonly links: readonly NavigationLink[];
}

interface DropdownMenu {
  readonly id: DropdownMenuId;
  readonly groups: readonly NavigationGroup[];
}

interface NavigationItem extends NavigationLink {
  readonly menu?: DropdownMenu;
}

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-site-header',
  styleUrl: './site-header.scss',
  templateUrl: './site-header.html',
})
export class SiteHeader {
  private readonly host = inject(ElementRef<HTMLElement>);

  protected readonly isMenuOpen = signal(false);
  protected readonly activeDropdown = signal<DropdownMenuId | null>(null);

  protected readonly navigation: readonly NavigationItem[] = [
    { label: 'Products', path: '/products' },
    { label: 'Services', path: '/services' },
    {
      label: 'Industries',
      path: '/industries',
      menu: {
        id: 'industries',
        groups: [
          {
            label: 'Industries',
            path: '/industries',
            links: [
              { label: 'Healthcare', path: '/industries/healthcare' },
              { label: 'Mining & Resources', path: '/industries/mining-resources' },
              { label: 'Professional Services', path: '/industries/professional-services' },
              { label: 'Government', path: '/industries/government' },
            ],
          },
        ],
      },
    },
    { label: 'Insights', path: '/insights' },
    { label: 'Company', path: '/company' },
    { label: 'Contact', path: '/contact' },
  ];

  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
    this.activeDropdown.set(null);
  }

  protected closeNavigation(): void {
    this.isMenuOpen.set(false);
    this.activeDropdown.set(null);
  }

  protected openDropdown(menuId: DropdownMenuId): void {
    this.activeDropdown.set(menuId);
  }

  protected closeDropdown(menuId?: DropdownMenuId): void {
    if (menuId === undefined || this.activeDropdown() === menuId) {
      this.activeDropdown.set(null);
    }
  }

  protected toggleDropdown(menuId: DropdownMenuId, event: MouseEvent): void {
    event.stopPropagation();
    this.activeDropdown.update((activeMenu) => (activeMenu === menuId ? null : menuId));
  }

  protected handleFocusOut(event: FocusEvent, menuId: DropdownMenuId): void {
    const currentTarget = event.currentTarget;
    const nextTarget = event.relatedTarget;

    if (
      currentTarget instanceof HTMLElement &&
      (!(nextTarget instanceof Node) || !currentTarget.contains(nextTarget))
    ) {
      this.closeDropdown(menuId);
    }
  }

  @HostListener('document:click', ['$event'])
  protected closeDropdownFromOutside(event: MouseEvent): void {
    const target = event.target;

    if (!(target instanceof Node) || !this.host.nativeElement.contains(target)) {
      this.closeDropdown();
    }
  }

  @HostListener('document:keydown.escape')
  protected closeNavigationWithEscape(): void {
    this.closeNavigation();
  }
}
