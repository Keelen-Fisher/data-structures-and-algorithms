# Insertion Sort

## Assignment

- Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

- Once you are done with your article, code a working, tested implementation of Insertion Sort based on the pseudocode provided.

- Image Example:

![insertion](../assets/pseudocode%20insertion.png)

With this pseudocode, the goal is to is to show the output of processing the input array:

- [8,4,23,42,16,15]

Then, consider stepping though the other inputs below:

- Reverse-sorted: [20,18,12,8,5,-2]
- Few uniques: [5,12,7,5,5,7]
- Nearly-sorted: [2,3,5,7,13,11]

## Process

- Insertion Sort is a sorting algorithm that sorts through an array, and builds the array one item at a time by comparisons.

### Using the sample array: [8,4,23,42,16,15]

### First Pass

![1](../assets/First%20Pass.png)

- As you are sorting through the array, you come to find that the first two elements are arranged to 8 being greater than 4, however in this case 4 should be as the first element within the array, so now we will sort the first two with 4 being sorted in what you call a ***"Sorted Sub Array***. This is found by looping through the array for each element, and as we loop, we set a temporary variable to be the array at that element. We then test that element through a while loop, with conditional statements that must be passed or else there will need to be an arrangement in a newly inserted sorted array.

### Second Pass

![2](../assets/Second%20Pass.png)

- Moving over to the next two elements, there is 8 and 23, using the loops and rules that we set within sorting, this works in the order of the array. No swapping is needed, passing though the loops affectively. 8 and 23 can be added into the sub array.

### Third Pass

![3.1](../assets/Third%20Pass%20.png)

- With 42 and 16, this is where we loop through the array and find that 42 is greater than 16 and is in front of 16, so this needs to be sorted by one then to check again.

- checking the next element next to 16, we find that 23 is in front of 16 instead of the opposite, and by looping through the array we can reorder it yet again.

- For the last check we can see that 8 is in front of 16 which is in the correct order, the sequence of the third pass is complete.

![3.2](../assets/Third%20Pass%202.png)

### Fourth pass

![4](../assets/Fourth%20Pass.png)

- Very similar to the third pass, we insert the new array with 15 being the last check within this array. after all of the checks through each element, 15 will be in arr[2] of the array, thus making the array fully sorted.

## Big Oh

- In terms of time complexity, this would be of `O(n)`. It depends on the length of the array, more elements can be pushed into the array n number of times making the complexity of its time to O(n).

- In terms of space complexity, this would be `O(1)`, meaning that that data is stable and consistent. Despite the possibility of data itself expanding, within the array of insertion this will not leave the array unstable. To extend on that matter, insertion sort is adaptive in nature.

## [Actual Code]()

## [Tests]()

