// Insertion Sort

function insertionSort(array){
    let n = array.length;

    for (let i=1; i<n; i++){

        let current = array[i];
        let j = i-1;

        while( (j>=0) && (current<array[j]) ){
            array[j+1] = array[j];
            j--;
        }

        array[j+1] = current
    }

    return array
}

console.log(insertionSort([23,54,2,1,6,3,8,76]));
// > [1, 2, 3, 6, 8, 23, 54, 76]


// Bubble Sort

function bubbleSort(array){
    let n = array.length;
    
    for (let i=n; i>0; i--){
        let swap = false
        for (let j=0; j<i; j++){
            
            if (array[j] > array[j+1]){
                swap = true;
                [array[j], array[j+1]] = [array[j+1], array[j]]
            }
        }
        if (!swap) return array
    }

    return array
}

console.log(bubbleSort([23,54,2,1,6,3,8,76]));
// > [1, 2, 3, 6, 8, 23, 54, 76]

// Selection Sort

function selectionSort(array){

    let n = array.length
    for (let i=0; i<n-1; i++){
        let minIdx = i
        for (let j = i+1; j<n; j++){
            if (array[j] < array[minIdx]){
                minIdx = j
            }
        }
        if (minIdx != i){ // If minimum element is the pivot element itself
            [array[minIdx], array[i]] = [array[i], array[minIdx]]
        }
    }

    return array
}

console.log(selectionSort([23,54,2,1,6,3,8,76]));
// > [1, 2, 3, 6, 8, 23, 54, 76]

