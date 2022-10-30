//q1
function checkValue(variable) {
    if (variable <= 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log(checkValue(0));

  //   *************************************************
  
  //q2
  function nextInt(n1) {
    return n1 + 1;
  }
  console.log(nextInt(2));

  //   ************************************************

//   q3
function strings(arr) {
    return arr.filter((str) => {
        return /[0-9]/.tst(str)
    })
}
console.log(strings(['q' , 'w' , '1e', '2r']
));

// ****************************************************** 
  
// Ex4
function EvenOrOdd(num){
    
    if (num === 0) {
            console.log('even');
        }else if (num ===1 ){
            console.log('odd');
        } else {
            return EvenOrOdd(num - 2);
        }
    }
    EvenOrOdd(8);

    // *************************************************

    //q6  
function name(array) {
    array.forEach((element) => {
      console.log(element);
    });
  }
  name(["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"]);

//   *****************************************************


//q8
let newSeries = [
    {
      id: 70111470,
      title: "Die Hard",
      boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [4.0],
      bookmark: [],
    },
    {
      id: 654356453,
      title: "Bad Boys",
      boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [5.0],
      bookmark: [{ id: 432534, time: 65876586 }],
    },
    {
      id: 65432445,
      title: "The Chamber",
      boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [4.0],
      bookmark: [],
    },
    {
      id: 675465,
      title: "Fracture",
      boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [5.0],
      bookmark: [{ id: 432534, time: 65876586 }],
    },
  ];
  
  function idTitle(arr){
    newArr = []
    arr.forEach(series => {
        ser = {"id" : series.id, "title": series.title}
        newArr.push(ser)
    })
    return newArr
}
console.log(idTitle(newSeries));

// *************************************************************

// q9
function idTitle2(arr){
    let newArr = arr.map(series => {
       return {id: series.id, title: series.title}
    })
    return newArr
}
console.log(idTitle2(newSeries));
 
// *************************************************************

// q10 

function rating(arr){
    let newArr= arr.filter(series => series.rating <5)
    return newArr
}
console.log(rating(newSeries));

//  **********************************************************


