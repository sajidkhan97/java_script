var year = prompt("please input a year to find out the next 20 leap years");
var counter = 20;
//no need for a result variable

//can have two arguments, first is the year entered by user
//second is how many leap years to display
function leapyear(years, num) {
    //convert years to integer
    years = parseInt(years);
    //cache reference to original number of leap years to be shown
    //for use in return statement
    var origNum = num;
    //add 1 to years just in case current year is leap year
    years++;
    //this string will hold all of the leap years
    var leapYears = '';
    //while num is above 0
    while (num > 0) {
        //if years is a multiple of 4 and years is not evenly divisible by 100
        //or years is evenly divisible by 100 and evenly divisible by 400
        //it is a leap year
        if (years % 4 === 0 && (years % 100 !== 0 || ( years % 100 === 0 && years % 400 === 0))) {
            //if at the last year
            if (num === 1) {
                //add a period to end
                leapYears += years + ".";
            }
            else {
                //otherwise, add a comma and space for other years
                leapYears += years + ", ";
            }
            //increase years
            years++;
            //decrease num
            num--;
        }
        else {
            //if not a multiple of 4, just add to years
            years++;
        }
    }
    //returns sentence after while loop is done
    return "The next " + origNum + " leap years are " + leapYears;
}

//write to document the result of running leapyear
document.write(leapyear(year, counter));
//or
//alert result of running leapyear
//alert(leapyear(year, counter));