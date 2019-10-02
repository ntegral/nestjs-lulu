import { Global, Module, DynamicModule, Provider, Type } from '@nestjs/common';
import { createLuluProviders } from './providers';
import { LuluConfigOptions } from '@ntegral/lulu';
import { LULU_MODULE_OPTIONS, LULU_TOKEN, createLuluClient } from './common';
import { LuluConfigAsyncOptions, LuluConfigOptionsFactory } from './interfaces';

@Global()
@Module({})
export class LuluCoreModule {
    public static forRoot(options: LuluConfigOptions): DynamicModule {
        const provider = createLuluProviders(options);

        return {
            exports: [provider,],
            module: LuluCoreModule,
            providers: [provider]
        };
    }

    public static forRootAsync(options: LuluConfigAsyncOptions): DynamicModule {
        const provider: Provider = {
            inject: [LULU_MODULE_OPTIONS],
            provide: LULU_TOKEN,
            useFactory: (options: LuluConfigOptions) => createLuluClient(options),
        };

        return {
            exports: [provider],
            imports: options.imports,
            module: LuluCoreModule,
            providers: [...this.createAsyncProviders(options), provider]
        };
    }

    private static createAsyncProviders(
        options: LuluConfigAsyncOptions,
      ): Provider[] {
        if (options.useExisting || options.useFactory) {
          return [this.createAsyncOptionsProvider(options)];
        }
        const useClass = options.useClass as Type<LuluConfigOptionsFactory>;
        return [
          this.createAsyncOptionsProvider(options),
          {
            provide: useClass,
            useClass,
          },
        ];
      }
    
      private static createAsyncOptionsProvider(
        options: LuluConfigAsyncOptions,
      ): Provider {
        if (options.useFactory) {
          return {
            inject: options.inject || [],
            provide: LULU_MODULE_OPTIONS,
            useFactory: options.useFactory,
          };
        }
        const inject = [
          (options.useClass || options.useExisting) as Type<LuluConfigOptionsFactory>,
        ];
        return {
          provide: LULU_MODULE_OPTIONS,
          useFactory: async (optionsFactory: LuluConfigOptionsFactory) =>
            await optionsFactory.createLuluOptions(),
          inject,
        };
      }
}