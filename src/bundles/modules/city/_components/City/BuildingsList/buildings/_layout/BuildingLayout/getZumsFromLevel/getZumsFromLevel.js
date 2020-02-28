const fib = n => { 

  if (n <= 1) {
    
    return n
  }

  return fib(n - 1)
    + fib(n - 2)
} 

export default n => fib(n + 4)