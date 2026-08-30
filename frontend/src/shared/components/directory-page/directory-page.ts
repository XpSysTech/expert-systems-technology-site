import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

export interface DirectoryPageItem {
  readonly code: string;
  readonly marker: string;
  readonly title: string;
  readonly description: string;
  readonly path: string;
  readonly action: string;
}

export interface DirectoryPageData {
  readonly eyebrow: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly introduction: string;
  readonly items: readonly DirectoryPageItem[];
}

const fallbackPage: DirectoryPageData = {
  eyebrow: 'EXPERT SYSTEMS TECHNOLOGY / DIRECTORY',
  title: 'Directory',
  subtitle: 'Explore',
  introduction: 'Explore the systems, services and operating contexts we support.',
  items: [],
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isDirectoryItem(value: unknown): value is DirectoryPageItem {
  return (
    isRecord(value) &&
    typeof value['code'] === 'string' &&
    typeof value['marker'] === 'string' &&
    typeof value['title'] === 'string' &&
    typeof value['description'] === 'string' &&
    typeof value['path'] === 'string' &&
    typeof value['action'] === 'string'
  );
}

function isDirectoryPageData(value: unknown): value is DirectoryPageData {
  return (
    isRecord(value) &&
    typeof value['eyebrow'] === 'string' &&
    typeof value['title'] === 'string' &&
    (value['subtitle'] === undefined || typeof value['subtitle'] === 'string') &&
    typeof value['introduction'] === 'string' &&
    Array.isArray(value['items']) &&
    value['items'].every(isDirectoryItem)
  );
}

@Component({
  imports: [RouterLink],
  selector: 'app-directory-page',
  styleUrl: './directory-page.scss',
  templateUrl: './directory-page.html',
})
export class DirectoryPage {
  private readonly route = inject(ActivatedRoute);
  protected readonly content = this.readContent();

  private readContent(): DirectoryPageData {
    const page = this.route.snapshot.data['directoryPage'];
    return isDirectoryPageData(page) ? page : fallbackPage;
  }
}
