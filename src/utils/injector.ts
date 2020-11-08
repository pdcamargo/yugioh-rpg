import 'reflect-metadata';

interface Type<T> {
  new (...args: any[]): T;
}

export type GenericClassDecorator<T> = (target: T) => void;

export const Injector = new (class {
  resolve<T>(Target: Type<any>): T {
    const tokens = Reflect.getMetadata('design:paramtypes', Target) || [];
    const injections = tokens.map((token: any) => Injector.resolve<any>(token));

    return new Target(...injections);
  }
})();
