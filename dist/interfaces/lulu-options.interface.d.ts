import { LuluConfigOptions } from "@ntegral/lulu";
import { ModuleMetadata, Type } from "@nestjs/common/interfaces";
export interface LuluConfigOptionsFactory {
    createLuluOptions(): Promise<LuluConfigOptions> | LuluConfigOptions;
}
export interface LuluConfigAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    inject?: any[];
    useClass?: Type<LuluConfigOptionsFactory>;
    useExisting?: Type<LuluConfigOptionsFactory>;
    useFactory?: (...args: any[]) => Promise<LuluConfigOptions> | LuluConfigOptions;
}
