# Merge Sort

## Assignment

- Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

- Once you are done with your article, code a working, tested implementation of Insertion Sort based on the pseudocode provided.

- Image Example:

![MERGE](../assets/PseudoCode%20Merge.png)

With this pseudocode, the goal is to show the output of processing output of the same sample array from insertion sort:

- [8,4,23,42,16,15]

Then, consider stepping though the other inputs below:

- Reverse-sorted: [20,18,12,8,5,-2]
- Few uniques: [5,12,7,5,5,7]
- Nearly-sorted: [2,3,5,7,13,11]

## Process

- The Merge Sort algorithm is a sorting algorithm that is based on the ***Divide-and-Conquer*** paradigm.

- We want to think of this as a recursive algorithm the continuously splits the array in half until it cannot anymore. So IF the array becomes empty or has one element left, then the dividing will cease.

### Using the sample array: [8,4,23,42,16,15]

### First pass

- You have a right index and left index to test the capabilities the division in the array, this will be done by first declaring the length of the array and establishing conditional statements that will be used to test both sides of the array. We check these two indexes, then we calculate the midpoint. Since the size of the array in this example is 6, it is divided evenly with two new array sizes of 3.

![Merge](../mergeAssets/First%20Pass.png)

### Second Pass

- There are now two halves, the next step is to check again if the left index is less than the right index; we will do this by establishing a loop (for or while) that repeats the conditional statements in the first pass and test. If the statement that the left index is smaller than the right index is still true, then calculate the midpoints for both the two new arrays.

![Merge](../mergeAssets/Second%20Pass.png)

### Third Pass

- Continue with the pattern of the previous two passes, split both arrays into two new arrays each. Continue to test/loop through the arrays until each "array" has only one index and can no longer split.

![Merge](../mergeAssets/Third%20Pass.png)

### Fourth Pass

- This is where we merge! We merge the elements again by the size of the elements. The smallest element goes first and the largest is at the end.

![Merge](../mergeAssets/Fourth%20Pass%20pt.1.png)

- Continue to merge using a while loop with conditional statements testing the size of each element to arrange the array. By organizing them, set the remaining entries in the array to the right if it equal to the left length, and set the rest to the left if not.

- Expected Result:

![Merge](../mergeAssets/Fourth%20Pass%20pt.2.png)

## Big Oh

- In terms of the time complexity, this is more related to `O(nlog(n))`, This is a recursive algorithm which requires logarithmic calculation to find the form of the data and the time needed to complete the request.

- In terms of the space complexity, this is O(n) because all elements are copied into new arrays and then merged once again into the original refactoring the order but never the size. This type of sort is also stable.

## [Actual Code](../merge/index.js)

> Code Was done with the help of research on this website: [StackAbuse Merge](https://stackabuse.com/merge-sort-in-javascript/)

## [Tests](../__tests__/merge.test.js)
