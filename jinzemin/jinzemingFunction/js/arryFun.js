/**
 * Created by jinzemin on 2016/12/30.
 */
/**
 *检查数组中是否存在某个元素
 * @param arry 检查的数组
 * @param needle 检查是否存在的元素
 * @returns {boolean}
 */
function contains (arry,needle){
    var arr=arguments[0];
    for (var i in arr) {
        if(arr[i]==needle){
            return true;
        }
    }
    return false
}
/**
 * 将数组进行递减排序；
 * @param arry 被排序的数组
 * @returns {Array}
 */
function arrySort(arry){
    arry.sort(new Function("a","b","return b-a"));
    var sortedArr=[];
    for(var i=0,len=arry.length; i<len; i++){
        sortedArr.push(arry[i]);
    }
    return sortedArr
};
/**
 * 获取元素在数组中的序号
 * @param arry 数组
 * @param value 元素
 * @returns {number}
 */
function arryGetIndex(arry,value){
    var arr=arguments[0];
    for(var i=0,len=arr.length; i<len; i++){
        if(arr[i]==value){
            return i;
        }
    }
    return i-1;
};
/**
 * 数组去重
 * @param arry
 * @returns {Array}
 */
function arryUnique(arry){
    var newArr=[],found;
    var arryLen=arry.length
    for(var i=0;i<arryLen; i++){
        found=undefined;
        for(var j=0; j<newArr.length; j++){
            if(arry[i]===newArr[j]){
                found=true;
                break
            }
        }
        if(!found) newArr.push(arry[i]);
    }
    return newArr;
};
