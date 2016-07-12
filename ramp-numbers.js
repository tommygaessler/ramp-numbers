// Ramp Numbers A ramp number is a number whose digits from left to right either only rise or stay the same. 1234 is a ramp number as is 1124. 1032 is not.
// Input: A positive integer, n.
// Output: true if the input is a ramp number, false if it is not

// My way

// var tester = 0;
function rampNumber(num)
{
  var magicNumber = num.toString().split("").map(Number);
  for (i=0; i<magicNumber.length; i++)
  {
    if (magicNumber[i] < magicNumber[i-1])
    {
      return false;
    }
  }
  return true;
}
console.log(rampNumber(11234));
//magicNumber[i-1]
// works with array, but use [i-1] instead of redefining tester because it compares 4 with undefined, which causes problems and uses another if statment

//my original code

// var tester = 0;
// function rampNumber(num)
// {
//   var magicNumber = num.toString().split("").map(Number);
//   console.log(magicNumber);
//   for (i=0; i<magicNumber.length; i++)
//   {
//     if (magicNumber[i] < magicNumber[i-1])
//     {
//       return false;
//     }
//     else if (magicNumber[i] >= magicNumber[i-1])
//     {
//        tester = magicNumber[i];
//        console.log(true);
//        return true;
//      }
//   }
// }
// console.log(rampNumber(11234));

// Michael's way

// function checkRamp(num)
// {
//   var numStr = num.toString();
//   for (var i = 0; i <= numStr.length; i++)
//   {
//     if (numStr[i] < numStr[i-1]) //compares with previous i
//     {
//       return false;
//     }
//   }
//   return true;
// }
