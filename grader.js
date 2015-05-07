module.exports = {

letterGrader: function(score){

if(score <= 59)
{
	return 'F';
}
else if(score <= 69)
{
	return 'D';
}
else if(score <= 79)
{
	return 'C';
}
else if(score <= 89)
{
	return 'B';
}
else if(score <= 100)
{
	return 'A';
}

},

averageScore: function(scores){

var sum = 0;
for(var i=0; i<scores.length; i++)
{
 sum += scores[i];
}
return sum / scores.length;
},

medianScore: function(array){

	var bubbleSort =function(array){
  
    for (var i = 0; i < array.length; i++){
    for (var j = array.length; j > 0; j--) {
      if (array[j] < array[j-1]) {
        var tmp = array[j];
        array[j] = array[j-1];
        array[j-1] = tmp;
      }
     }
     }
     return array;
     };

	var sorted = bubbleSort(array);

	var median = array[Math.floor(sorted.length/2)];
	return median;

},

modeScore: function(scores) {

var max = function(arr) {
var max = 0;

for(var j = 0; j<arr.length; j++) {
if(arr[j] > max) {
	max = arr[j];
}
}
return max;
};


var result = {};
var new_arr = [];

for(var i = 0; i<scores.length; i++) {
   if (result[scores[i]] == null) {
		result[scores[i]] = 1;
   }
   else {
   	   result[scores[i]]++;
   }

}
var name = 0;
var max = 0;
 
 for(keys in result) {
    if(result[keys] > max)
 	{
      max = result[keys];
      name = keys;
     // console.log(name);
      
    }
}
return parseInt(name);
}
};

//console.log(letterGrader(100))