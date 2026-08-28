<!-- Generate a Readme template -->
1. Project structure
expert-systems-technology-site/
│
├── frontend/
│   ├── src/
│   ├── angular.json
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── MyCompany.Api/
│   ├── MyCompany.Application/
│   ├── MyCompany.Domain/
│   ├── MyCompany.Infrastructure/
│   └── Dockerfile
│
├── cloudflare/
│   └── index.ts
│
├── wrangler.jsonc
├── package.json
└── README.md



2. Containerize your ASP.NET Core API - Your API needs a normal Dockerfile.
Cloudflare Containers runs normal container images in a Linux environment and is designed to support arbitrary programming languages/runtimes, so ASP.NET Core does not need to be rewritten as JavaScript/TypeScript