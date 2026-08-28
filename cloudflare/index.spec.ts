import { afterEach, describe, expect, it, vi } from 'vitest';
import worker, { type Env } from './index';

describe('Expert Systems Technology Cloudflare Worker', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('serves frontend requests from the Angular assets binding', async () => {
    const assetFetch = vi.fn(
      async () =>
        new Response('<html>XpSys</html>', {
          status: 200,
          headers: {
            'content-type': 'text/html',
          },
        })
    );

    const env: Env = {
      API_ORIGIN: 'https://api.example.com',

      ASSETS: {
        fetch: assetFetch,
      },
    };

    const request = new Request(
      'https://www.example.com/products/clinic-os'
    );

    const response = await worker.fetch(request, env);

    expect(assetFetch).toHaveBeenCalledOnce();
    expect(response.status).toBe(200);
    expect(await response.text()).toContain('XpSys');
  });

  it('proxies /api requests to the ASP.NET Core origin', async () => {
    const upstreamFetch = vi.fn(
      async (request: Request) =>
        new Response(
          JSON.stringify({
            status: 'ok',
            url: request.url,
          }),
          {
            status: 200,
            headers: {
              'content-type': 'application/json',
            },
          }
        )
    );

    vi.stubGlobal('fetch', upstreamFetch);

    const env: Env = {
      API_ORIGIN: 'https://api.example.com',

      ASSETS: {
        fetch: vi.fn(),
      },
    };

    const request = new Request(
      'https://www.example.com/api/products?page=1'
    );

    const response = await worker.fetch(request, env);

    expect(upstreamFetch).toHaveBeenCalledOnce();

    const forwardedRequest =
      upstreamFetch.mock.calls[0][0] as Request;

    expect(forwardedRequest.url).toBe(
      'https://api.example.com/api/products?page=1'
    );

    expect(response.status).toBe(200);
  });

  it('returns 500 when the API origin is missing', async () => {
    const env: Env = {
      API_ORIGIN: '',

      ASSETS: {
        fetch: vi.fn(),
      },
    };

    const request = new Request(
      'https://www.example.com/api/products'
    );

    const response = await worker.fetch(request, env);

    expect(response.status).toBe(500);
  });
});