import { RegistrosModule } from './registros.module';

describe('RegistrosModule', () => {
  let registrosModule: RegistrosModule;

  beforeEach(() => {
    registrosModule = new RegistrosModule();
  });

  it('should create an instance', () => {
    expect(registrosModule).toBeTruthy();
  });
});
