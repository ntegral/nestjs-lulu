import { Test } from '@nestjs/testing';

import { LuluModule } from './lulu.module';
import { LULU_TOKEN } from './common/lulu.constants';
import { LuluConfigOptions, LuluService } from '@ntegral/lulu';
import { LuluConfigOptionsFactory } from './interfaces';

describe('LuluModule', () => {

    let config: LuluConfigOptions = {
        client_key: '---lulu client key ---',
        client_secret: '---lulu client secret ---',
        environment: 'development'
    };

    class TestService implements LuluConfigOptionsFactory {
        createLuluOptions(): LuluConfigOptions {
            return config;
        }
    }

    describe('forRoot', () => {
        it('should provide the lulu client', async() => {
            const mod = await Test.createTestingModule({
                imports: [LuluModule.forRoot(config)],
            }).compile();

            const client = mod.get<LuluService>(LULU_TOKEN);
            await client.init();
            console.log('lulu', client);
            // expect(client).resolves.toBeDefined();
            expect(client).toBeInstanceOf(LuluService);
        });
    });

    describe('forRootAsync', () => {
        describe('when the `useFactory` option is used', () => {
            it('should provide lulu client', async () => {
                const mod = await Test.createTestingModule({
                    imports: [
                        LuluModule.forRootAsync({
                            useFactory: () => (config),
                        }),
                    ]
                }).compile();

                const client = mod.get<LuluService>(LULU_TOKEN);
                await client.init();
                expect(client).toBeDefined();
                expect(client).toBeInstanceOf(LuluService);
            });
        })
    });

    describe('when the `useClass` option is used', () => {
        it('should provide the lulu client', async () => {
            const mod = await Test.createTestingModule({
                imports: [
                    LuluModule.forRootAsync({
                        useClass: TestService
                    })
                ]
            }).compile();

            const client = mod.get<LuluService>(LULU_TOKEN);
            expect(client).toBeDefined();
            expect(client).toBeInstanceOf(LuluService);
        });
    });
})