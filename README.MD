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
    OpenTokModule.forRoot({
      apiKey: 'tokbok_api_key',
      apiSecret: 'tokbok_secret_key'
    }),
  ],
})
export class AppModule {}
```

You can then inject the OpenTok client into any of your injectables by using a
custom decorator

```typescript
import { Injectable } from '@nestjs/common';
import { InjectOpenTok } from '@ntegral/nestjs-opentok';
import * as OpenTok from 'opentok';

@Injectable()
export class AppService {
  public constructor(@InjectOpenTok() private readonly client: OpenTok) {}

  createSession() {
    return new Promise((resolve, reject) => {
      this.opentok.createSession({mediaMode: 'routed', archiveMode: 'always'}, (err, session) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        resolve(session);
      })
    })
  }
}
```

Asynchronous setup is also supported

```typescript
import { Module } from '@nestjs-common';
import { ConfigModule } from '../common/config/config.module';
import { ConfigService } from '../common/config/config.service';
import { OpenTokModule } from '@ntegral/nestjs-sendgrid';

@Module({
  imports: [
    OpenTokModule.forRootAsync({
      imports: [ConfigModule],  
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => ({
        apiKey: cfg.get('tokbox_api_key'),
        apiSecret: cfg.get('tokbox_secret')
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
- [tokbox](https://github.com/opentok/opentok-node)

Copyright &copy; 2019 Ntegral Inc.
