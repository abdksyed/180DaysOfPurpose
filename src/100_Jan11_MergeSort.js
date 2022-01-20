function MergeTwoArrays(array1, array2){
    let i=0,j=0;
    let curr = 0
    const merged_arr = []
    while ( (i < array1.length) && (j < array2.length) ){

        if (array1[i] < array2[j]){
            merged_arr.push(array1[i++]);
        }
        else{
            merged_arr.push(array2[j++]);
        }
    }

    if (i == array1.length) merged_arr.push(...array2.slice(i));
    else if (j == array2.length) merged_arr.push(...array1.slice(j));

    return merged_arr
}

console.log(MergeTwoArrays([1,3,5,7,13],[2,4,6,8,11,14]));

let inversionCount = 0;
function MergeArray(array, start, mid, end){
    let i=0, j=0, curr = start;
    const array1 = array.slice(start,mid+1);
    const array2 = array.slice(mid+1,end+1);
    while ( (i < array1.length) && (j < array2.length) ){

        if (array1[i] <= array2[j]){
            array[start++] = array1[i++];
        }
        else{
            inversionCount += array1.length-i
            array[start++] = array2[j++];
        }
    }

    while (i < array1.length){
        array[start++] = array1[i++]
    }
    while (j < array2.length){
        array[start++] = array2[j++]
    }

    return array
}

function MergeSort(array, start, end){
    if (start >= end){
        return
    }
    let mid = parseInt((start+end)/2);
    MergeSort(array, start, mid);
    MergeSort(array, mid+1, end);
    MergeArray(array, start, mid, end);
    return array
}

console.log(MergeSort([1,4,51,3,6,5,2,9,7,8,13,16], 0, 11));
console.log(inversionCount);


// Asssignment 1

/*
Using Divide & Conquer, find maximum and minimum elements from the given array.
*/

function findMerge(L,R){
    if (L[0] <= R[0]){
        if (L[1] > R[1]) return [L[0], L[1]]
        else return [L[0],R[1]]
    }
    else if (R[0] < L[0]){
        if (L[1] > R[1]) return [R[0], L[1]]
        else return [R[0],R[1]]
    }
}
function findMaxMin(array){
    if (array.length == 1) return [array[0], array[0]]

    if (array.length == 2){
        if (array[0]>array[1])
        {
            return [array[1], array[0]];
        }
        else return array
    }
    let mid = parseInt(array.length/2)
    let L = array.slice(0,mid)
    let R = array.slice(mid)
    L = findMaxMin(L);
    R = findMaxMin(R);
    return findMerge(L,R)

}

console.log(findMaxMin([2,1,4,3,6,7,8,3,5]));