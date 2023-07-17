

 export const comparez = (propertyName) =>  {
    return function (a, b) {
        let x = a[propertyName];
        let y = b[propertyName];
        if (x < y) {
          return 1;
        } else if (x > y) {
          return -1;
        } else {
          return 0;
        }
      };
}
