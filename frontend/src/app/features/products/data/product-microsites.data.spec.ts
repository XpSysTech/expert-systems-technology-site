import { productMicroPage } from './product-microsites.data';

describe('product microsite content', () => {
  it('provides role-aware Clinic OS product tour content', () => {
    const page = productMicroPage('clinic-os', 'tour');
    expect(page.title).toBe('Product Tour');
    expect(page.sections?.map((section) => section.title)).toEqual([
      'Coordinate the visit.', 'Record care in context.', 'Govern the practice.',
    ]);
    expect(page.status).toBe('IN DEVELOPMENT');
  });

  it('separates current Help Me capability status from future capability', () => {
    const page = productMicroPage('help-me', 'capabilities');
    const itemMetadata = page.sections?.flatMap((section) => section.items.map((item) => item.meta));
    expect(itemMetadata).toContain('AVAILABLE IN CURRENT BUILD');
    expect(itemMetadata).toContain('IN DEVELOPMENT');
  });

  it('does not claim a compliance certification for Clinic OS', () => {
    const page = productMicroPage('clinic-os', 'compliance');
    const content = JSON.stringify(page);
    expect(content).toContain('not claimed as certifications');
    expect(content).not.toContain('HIPAA certified');
  });
});
