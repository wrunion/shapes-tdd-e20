import { Rectangle } from './../src/rectangle.js';

describe('Rectangle', () => {

  test('area function returns a value', () => {
    let rectangle = new Rectangle(1,2);
    expect(rectangle.getArea()).toBeTruthy(); 
  });
  

});