This is [Next.js](https://nextjs.org/) project boilerplate with [Nest.js](https://nestjs.com/) as backend.

Includes:

* Next-Auth
* Stitches
* Formik
* Yup
* SVG as Component
* Prisma

## Getting Started

Install dependencies
```
yarn install
```

Copy .env file from template
```bash
cp .env.example .env
```

Setup environment variables
```
DATABASE_URL=postgres://admin:admin@localhost:5432/localdb
EMAIL_SERVER=smtp://username:password@smtp.emailserver.com:587
EMAIL_FROM=noreply@yourdomain.com
GITHUB_CLIENT_ID=xxx
GITHUB_CLIENT_SECRET=xxx
NEXTAUTH_URL=http://localhost:3000
```

Setup Postgres Database with Docker-compose
```
docker-compose up -d
```

Generate Prisma Client with provided schema
```
yarn generate
```

Run migration
```
yarn migrate
```

Finally
```
yarn dev
```

## Learn More

[Next.js Documentation](https://nextjs.org/docs/getting-started)

[Nest.js Documentation](https://docs.nestjs.com/)

[Next-Auth Documentation](https://next-auth.js.org/getting-started/introduction)

[Formik Documentation](https://formik.org/docs/overview)

[Prisma Documentation](https://www.prisma.io/docs/)

[Stitches Documentation](https://stitches.dev/docs/installation)

## Credits

https://github.com/Skn0tt/nextjs-nestjs-integration-example
