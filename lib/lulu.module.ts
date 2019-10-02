import { DynamicModule, Module } from '@nestjs/common';
import { LuluConfigOptions } from '@ntegral/lulu';

import { LuluCoreModule } from './lulu-core.module';
import { LuluConfigAsyncOptions } from './interfaces';

@Module({})
export class LuluModule {
    public static forRoot(options: LuluConfigOptions): DynamicModule {
        return {
            module: LuluModule,
            imports: [ LuluCoreModule.forRoot(options as LuluConfigOptions)]
        };
    }

    public static forRootAsync(options: LuluConfigAsyncOptions): DynamicModule {
        return {
            module: LuluModule,
            imports: [LuluCoreModule.forRootAsync(options)]
        };
    }
}