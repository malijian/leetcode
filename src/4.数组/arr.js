
function Myslice(arr,n) {
    let newarr=[]
    for (let i = 0; i < arr.length; i++) {
       if (i!==n-1) {
           newarr.push(arr[i])
       }
    }
   return newarr
}

let arr =[1,2,3,4]
console.log(Myslice(arr,2));