import { DynamicModule } from '@nestjs/common';
import { LuluConfigOptions } from '@ntegral/lulu';
import { LuluConfigAsyncOptions } from './interfaces';
export declare class LuluModule {
    static forRoot(options: LuluConfigOptions): DynamicModule;
    static forRootAsync(options: LuluConfigAsyncOptions): DynamicModule;
}
