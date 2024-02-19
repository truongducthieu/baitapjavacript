let arr = ["thu2", "thu3", "thu4", "thu5", "thu6", "thu7", "cn"];
var x = 5;

switch (x) {
    case 0:
      console.log(arr[x - 5]);
        break;
    case 1:
             console.log(arr[x - 4]);
        break;
    case 2:
           console.log(arr[x - 3]);
        break;
    case 3:
            console.log(arr[x - 2]);
        break;
    case 4:
         console.log(arr[x - 1]);
        break;
    case 5:
              console.log(arr[x -0]);
        break;
    case 6:
             console.log(arr[x +1]);
        break;
}