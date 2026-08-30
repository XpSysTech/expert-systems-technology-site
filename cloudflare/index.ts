export interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };

  API_ORIGIN: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const incomingUrl = new URL(request.url);

    // Forward API traffic to the ASP.NET Core backend.
    if (
      incomingUrl.pathname === '/api' ||
      incomingUrl.pathname.startsWith('/api/')
    ) {
      if (!env.API_ORIGIN) {
        return new Response('API origin is not configured.', {
          status: 500,
        });
      }

      const apiOrigin = new URL(env.API_ORIGIN);

      const targetUrl = new URL(
        incomingUrl.pathname + incomingUrl.search,
        apiOrigin
      );

      const proxiedRequest = new Request(targetUrl.toString(), request);

      return fetch(proxiedRequest);
    }

    // Angular/static requests.
    return env.ASSETS.fetch(request);
  },
};