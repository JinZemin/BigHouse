/**
 * Created by jinzemin on 2017/1/4.
 * 表格排序
 */
var tbody = document.querySelector('#tableSort').tBodies[0];
var th = document.querySelector('#tableSort').tHead.rows[0].cells;
var td = tbody.rows;
for (var i = 0;i < th.length;i++){
    th[i].flag = 1;
    th[i].onclick = function(){
        sort(this.getAttribute('data-type'),this.flag,this.cellIndex);
        this.flag = -this.flag;
    };
};
function sort(str,flag,n){
    var arr = [];  //存放DOM
    for (var i = 0;i < td.length;i++){
        arr.push(td[i]);
    };
    //排序
    arr.sort(function(a,b){
        return method(str,a.cells[n].innerHTML,b.cells[n].innerHTML) * flag;
    });
    //添加
    for (var i = 0;i < arr.length;i++){
        tbody.appendChild(arr[i]);
    };
};
//排序方法
function method(str,a,b){
    switch (str){
        case 'num':  //数字排序
            return a-b;
            break;
        case 'string':  //字符串排序
            return a.localeCompare(b);
            break;
        default:   //日期排序，IE8下'2012-12-12'这种格式无法设置时间，替换成'/'
            return new Date(a.split('-').join('/')).getTime()-new Date(b.split('-').join('/')).getTime();
    };
};
