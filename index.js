function f(arr){
    for(let i=0;i<arr.length;i++){
        let o = arr[i];
        if(o.age>18 && o.gender=="male") console.log(o.name+" "+o.age+" "+o.gender);
    }
}


let arr1 = [
    {
      name:"darshan",
      age:21,
      gender:'male'
    },
    {
      name:"trisha",
      age:29,
      gender:"male"
    },
    {
     name:"rishika",
     age:21,
     gender:"female"
    }
]

f(arr1);