import { UtilClass } from 'src/app/util-class';


describe('Util Class Test', () => {

  it('Test say Hello', () => {
    expect(UtilClass.sayHello()).toEqual('Hello');
  });
});
