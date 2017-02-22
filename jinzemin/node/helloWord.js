/**
 * Created by jinzemin on 2016/12/22.
 */
var num=0;
for(var i=0;i<100; i++){
    num+=1;
}
console.log(num)
var a="金泽明：37;金泽明pppp：57;金泽明：87;金泽明：87";
var b=a.split(";");
console.log(b);
var c=0;
for(var i=0,len=b.length; i<len; i++){
    var d=b[i].slice(4,6);
    c+=parseInt(d);
    console.log(c)
}
