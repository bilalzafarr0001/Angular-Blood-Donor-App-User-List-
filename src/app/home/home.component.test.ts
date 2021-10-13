import * as home_component from './home.component';
import * as forms from '@angular/forms';
// @ponicode
describe('onSubmit', () => {
  let inst: any;

  beforeEach(() => {
    inst = new home_component.HomeComponent();
  });

  test('0', () => {
    let object: any = [{}];
    let object2: any = [{}];
    let param1: any = new forms.NgForm(object, object2);
    let callFunction: any = () => {
      inst.onSubmit(param1);
    };

    expect(callFunction).not.toThrow();
  });

  test('1', () => {
    let object: any = [{}, {}, {}];
    let object2: any = [{}];
    let param1: any = new forms.NgForm(object, object2);
    let callFunction: any = () => {
      inst.onSubmit(param1);
    };

    expect(callFunction).not.toThrow();
  });

  test('2', () => {
    let object: any = [{}, {}, {}, {}, {}];
    let object2: any = [{}, {}];
    let param1: any = new forms.NgForm(object, object2);
    let callFunction: any = () => {
      inst.onSubmit(param1);
    };

    expect(callFunction).not.toThrow();
  });

  test('3', () => {
    let object: any = [{}];
    let object2: any = [{}, {}, {}];
    let param1: any = new forms.NgForm(object, object2);
    let callFunction: any = () => {
      inst.onSubmit(param1);
    };

    expect(callFunction).not.toThrow();
  });

  test('4', () => {
    let object: any = [{}, {}, {}, {}];
    let object2: any = [{}];
    let param1: any = new forms.NgForm(object, object2);
    let callFunction: any = () => {
      inst.onSubmit(param1);
    };

    expect(callFunction).not.toThrow();
  });

  test('5', () => {
    let param1: any = new forms.NgForm([], []);
    let callFunction: any = () => {
      inst.onSubmit(param1);
    };

    expect(callFunction).not.toThrow();
  });
});

// @ponicode
describe('onSubmitForm', () => {
  let inst: any;

  beforeEach(() => {
    inst = new home_component.HomeComponent();
  });

  test('0', () => {
    let object: any = [{}, {}, {}];
    let object2: any = [{}];
    let param1: any = new forms.NgForm(object, object2);
    let callFunction: any = () => {
      inst.onSubmitForm(param1);
    };

    expect(callFunction).not.toThrow();
  });

  test('1', () => {
    let object: any = [{}];
    let object2: any = [{}, {}];
    let param1: any = new forms.NgForm(object, object2);
    let callFunction: any = () => {
      inst.onSubmitForm(param1);
    };

    expect(callFunction).not.toThrow();
  });

  test('2', () => {
    let object: any = [{}];
    let object2: any = [{}, {}, {}, {}, {}];
    let param1: any = new forms.NgForm(object, object2);
    let callFunction: any = () => {
      inst.onSubmitForm(param1);
    };

    expect(callFunction).not.toThrow();
  });

  test('3', () => {
    let object: any = [{}, {}, {}];
    let object2: any = [{}, {}, {}, {}];
    let param1: any = new forms.NgForm(object, object2);
    let callFunction: any = () => {
      inst.onSubmitForm(param1);
    };

    expect(callFunction).not.toThrow();
  });

  test('4', () => {
    let object: any = [{}, {}, {}, {}];
    let object2: any = [{}, {}, {}, {}];
    let param1: any = new forms.NgForm(object, object2);
    let callFunction: any = () => {
      inst.onSubmitForm(param1);
    };

    expect(callFunction).not.toThrow();
  });

  test('5', () => {
    let param1: any = new forms.NgForm([], []);
    let callFunction: any = () => {
      inst.onSubmitForm(param1);
    };

    expect(callFunction).not.toThrow();
  });
});
