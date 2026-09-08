import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Sitemap } from './sitemap';
describe('Sitemap', () => { it('lists service tiers, careers pages and legal destinations', async () => { await TestBed.configureTestingModule({ imports: [Sitemap], providers: [provideRouter([])] }).compileComponents(); const fixture = TestBed.createComponent(Sitemap); await fixture.whenStable(); expect(fixture.nativeElement.querySelectorAll('h1')).toHaveLength(1); expect(fixture.nativeElement.textContent).toContain('Managed Website'); expect(fixture.nativeElement.textContent).toContain('Students & early talent'); expect(fixture.nativeElement.textContent).toContain('Privacy notice'); }); });
