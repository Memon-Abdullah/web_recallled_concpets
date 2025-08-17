// in number just 0 is falsy, all others are truthy
// in string just empty string is falsy, all others are truthy
const truthyFalsy = (value) => {
  if (typeof value === 'number') {
    return value !== 0;
  } else if (typeof value === 'string') {
    return value.length > 0;
  }
  return Boolean(value);
}

// boolean is a constructor function that check the turhty and falsy values like
boolean(10); // true
boolean(0); // false    
boolean('hello'); // true
boolean(''); // false
boolean(-1); // true
boolean(null); // false

boolean(undefined); // false
boolean(NaN); // false

boolean(infinity); // true
boolean(-infinity); // true


// falsy values 
/*
* 0 
* empty string
* null
* undefined
* NaN
* false
* -0
* -0.0
* -0.   
* -0.0e+10
* -0.0e-10
* -0.0e+10
*/ 

// we can use the the not oprator like this !! as boolean function
