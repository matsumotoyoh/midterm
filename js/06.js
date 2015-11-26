function isPrimeNumber(number){
  if(number == 1){
    return false;
  }
  i = 2;
    while(i < number){
      if(number % i == 0){
        return false;
      }
      i = i + 1;
      }
return true;
  }
