import { LuluService, LuluConfigOptions } from '@ntegral/lulu';

export function createLuluClient(options: LuluConfigOptions){
    const client = new LuluService(options);
    return client;
}