//  function defer(func, ms) {
//      return function() {
//          setTimeout(() => func(...arguments), ms);
//      }
//  };
//  const obj = {
//      a: 1,
//      b: 2,
//      sum() {
//          console.log(`${this.a} + ${this.b}`);
//      }
//  };
//  const defered = defer(obj.sum.bind(obj), 1000);
//  defered();

//=============================================

export function defer(func, ms) {
    return function() {
        setTimeout(() => func.call(this, ...arguments), ms);
    }
};
const obj = {
    sum() {
        console.log(`${this.a} + ${this.b}`);
    }
};
const defered = defer(obj.sum, 1000);
defered.call({ a: 2, b: 2 });