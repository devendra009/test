let prime_numbers = function* (numbers) {

    while (numbers-- > 1) {
  
        // Write code to return the nextPrime number
  
        // ....
  
  
  
        yield nextPrime;
  
    }
  
  }
  
  
  
  // Expected output should be 2, 3, 5, 7
  
  console.log([ ...prime_numbers(10) ]);
  
  
  
  
  
  // Expected output should be 2, 3, 5, 7, 11, 13, 17, 19
  
  console.log([ ...prime_numbers(20) ]);
  
  
  
  
  
  console.log([ ...prime_numbers(50) ]);
  
  