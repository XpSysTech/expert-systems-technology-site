import { CAREER_DETAIL_PAGES } from './careers.data';

describe('careers content', () => {
  it('provides every requested careers subpage', () => {
    expect(Object.keys(CAREER_DETAIL_PAGES)).toEqual([
      'open-positions',
      'getting-hired',
      'students-and-early-talent',
      'life-at-expert-systems-technology',
    ]);
  });

  it('covers the requested life-at-XpSys topics without presenting conditional benefits as universal', () => {
    const page = CAREER_DETAIL_PAGES['life-at-expert-systems-technology'];
    const content = page?.sections.map((section) => `${section.code} ${section.title}`).join(' ');

    expect(content).toContain('INTERVIEWING & ONBOARDING');
    expect(content).toContain('TIME OFF');
    expect(content).toContain('MENTAL HEALTH & WELLBEING');
    expect(content).toContain('TRANSPARENCY');
    expect(content).toContain('HEALTHCARE');
  });
});
