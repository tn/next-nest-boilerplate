This is [Next.js](https://nextjs.org/) project boilerplate with [Nest.js](https://nestjs.com/) as backend.

Includes:

* Next-Auth
* Theme-ui
* Formik
* Yup
* SVG as Component
* Prisma

## Getting Started

Install dependencies
```
yarn
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

Setup environment variables (.env.example)
```
DATABASE_URL=postgres://admin:admin@localhost:5432/localdb
EMAIL_SERVER=smtp://username:password@smtp.emailserver.com:587
EMAIL_FROM=noreply@yourdomain.com
NEXTAUTH_URL=http://localhost:3000
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

## Credits

https://github.com/Skn0tt/nextjs-nestjs-integration-example
