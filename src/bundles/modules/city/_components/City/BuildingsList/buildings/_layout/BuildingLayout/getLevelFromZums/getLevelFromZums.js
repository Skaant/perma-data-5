// https://www.geeksforgeeks.org/find-index-given-fibonacci-number-constant-time/
export default n => {

  if (n < 3)

    throw new Error('RAYÖN must contains at least 3 ZUMS (a XAN).')

  n += 1

  let a = 0,
    b = 1,
    c = 1,
    res = 1

  // iterate until generated fibonacci number  
  // is less than given fibonacci number 
  while (c < n) {
    
    c = a + b
    
    // res keeps track of number of generated  
    // fibonacci number 

    res++
    a = b
    b = c
  }

  return (res - 5)
}