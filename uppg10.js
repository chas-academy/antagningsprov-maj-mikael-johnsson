function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];
  
    // skapa tre arrayer - bigEven, smallOdd, other
    // loopa igenom numbers och placera talen i respektive array
    // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
    // smallOdd ska innehålla tal mindre än 10 och udda
    // other ska innehålla alla andra tal
    // returnera ett objekt med de tre arrayerna

    let bigEven = [];
    let smallOdd = [];
    let other = [];

    numbers.forEach(e => {
      if(e > 10 && e % 2 == 0){
        bigEven.push(e)

      } else if(e < 10 && e % 2 == 1){
        smallOdd.push(e);

      } else {
        other.push(e);

      };
    });
    
    const returnObject = {
      bE: bigEven,
      sO: smallOdd,
      o: other,
    };

    return(returnObject);
  
  };
  
  module.exports = { uppg10 };

  uppg10();
