
var arr = [1, 2, 3];
(function next(i, len, callback) {
    if (i < len) {
        ASYNC(arr[i], function (value) {
            arr[i] = value;
            next(i + 1, len, callback);
        });
    } else {
        callback();
    }
}(0, arr.length, function () {
    // All array items have processed.
    console.log(arr);
}));


//HOW ABOUT.....
var len = arr.length, 
    i = 0;
async(arr[i], function (value) {
            arr[i] = value;
            i++;
	    if(i==len){
	      //All array items have processed.
	    }
});//-------------------Badlly, only i=0(run) to i=1(not run)


//HOW ABOUT........
var len = arr.length, 
    i = 0;
function next(i, cb){
async(arr[i], function (value) {
            arr[i] = value;
            i++;
	    if(i==len){
	      //All array items have processed.
	      cb();
	    }else{
	      next(i, cb);
	    }
});
}
next(i, function(){
  console.log(arr);
}); //----------------------arr is at global scope

//HOW ABOUT......
function next(i, arr, cb){
var len = arr.length;

async(arr[i], function (value) {
            arr[i] = value;
            i++;
	    if(i==len){
	      //All array items have processed.
	      cb();
	    }else{
	      next(i, arr, cb);
	    }
});
}
next(/*i*/0, [1,2,3,4,5], function(){
  console.log(arr);
});//-----------------------Great!!! no global variable
