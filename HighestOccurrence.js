var arr = [1,3,54,56,6,6,1,6];
var obj = {};

/* first convert the array in to object with unique elements and number of times each element is repeated */
for(var i = 0; i < arr.length; i++)
{
   var x = arr[i];
   if(!obj[x])
     obj[x] = 1;
   else 
     obj[x]++;
}

console.log(obj);//just for reference

/* now traverse the object to get the element */
var index = 0;
var max = 0;

for(var obIndex in obj)
{
  if(obj[obIndex] > max)
  {
    max = obj[obIndex];
    index = obIndex;
  }
}
console.log(index+" got maximum time repeated, with "+ max +" times" );
