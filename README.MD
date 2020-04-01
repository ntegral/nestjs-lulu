[![npm version](http://img.shields.io/npm/v/@ntegral/nestjs-lulu.svg?style=flat)](https://npmjs.org/package/@ntegral/nestjs-lulu "View this project on npm")
[![Codecov Coverage](https://img.shields.io/codecov/c/github/ntegral/nestjs-lulu/master.svg?style=flat-square)](https://codecov.io/gh/ntegral/nestjs-lulu)
[![ISC license](http://img.shields.io/badge/license-ISC-brightgreen.svg)](http://opensource.org/licenses/ISC)

<p align="center">
  <h3 align="center">
    @ntegral/nestjs-lulu
  </h3>

  <p align="center">
    Provides an injectable lulu api client to provide features to the Lulu API for your nestjs projects
  </p>
</p>

## Table Of Contents

- [About](#about)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## About

`@ntegral/nestjs-lulu` implements a module, `LuluModule`, which when imported into
your nestjs project provides a Lulu Api client to any class that injects it. This
lets Lulu be worked into your dependency injection workflow without having to
do any extra work outside of the initial setup.

## Installation

```bash
npm install --save @ntegral/nestjs-lulu @ntegral/lulu
```

## Getting Started

The simplest way to use `@ntegral/nestjs-lulu` is to use `LuluModule.forRoot`

```typescript
import { Module } from '@nestjs-common';
import { LuluModule } from '@ntegral/nestjs-lulu';

@Module({
  imports: [
    LuluModule.forRoot({
      client_key: 'lulu_api_key',
      client_secret: 'lulu_secret_key',
      environment: 'development' | 'production'
    }),
  ],
})
export class AppModule {}
```

You can then inject the Lulu client into any of your injectables by using a
custom decorator

```typescript
import { Injectable } from '@nestjs/common';
import { InjectLulu } from '@ntegral/nestjs-lulu';
import { LuluService } from '@ntegral/lulu';

@Injectable()
export class AppService {
  public constructor(@InjectLulu() private readonly client: LuluService) {}

  listShippingOptions() {
    return this.client.shippingOptions.list({page: 1, page_size: 100, iso_country_code: 'US'});
  }
}
```

Asynchronous setup is also supported

```typescript
import { Module } from '@nestjs-common';
import { ConfigModule } from '../common/config/config.module';
import { ConfigService } from '../common/config/config.service';
import { LuluModule } from '@ntegral/nestjs-lulu';

@Module({
  imports: [
    LuluModule.forRootAsync({
      imports: [ConfigModule],  
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => ({
        client_key: cfg.get('lulu_api_key'),
        client_secret: cfg.get('lulu_secret'),
        environment: 'development' | 'production'
      }),
    }),
  ],
})
export class AppModule {}
```

## Contributing

I would greatly appreciate any contributions to make this project better. Please
make sure to follow the below guidelines before getting your hands dirty.

1. Fork the repository
2. Create your branch (`git checkout -b my-branch`)
3. Commit any changes to your branch
4. Push your changes to your remote branch
5. Open a pull request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [nestjs](https://nestjs.com)

Copyright &copy; 2019 Ntegral Inc.
