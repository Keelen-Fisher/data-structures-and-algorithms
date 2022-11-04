# Code Challenge:  Hashmap-Left-Join

## Challenge

- Implement a simplified LEFT JOIN for 2 Hashmaps.

## Feature Tasks

- Write a function called left join

- Arguments: two hash maps

  - The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.

  - The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.

- Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic

## Approach & Efficiency

Build a method that takes in 2 hash maps as a parameter. Then create a list and iterate through each hashmap and then compare the keys only if it matches.

- Time complexity - Linear O(n): Depending on the size of the first input hashmap, if it's larger than normal then the function will take longer to export.

- Space complexity - Linear O(n): Depending on the size of the first input hashmap.

## API

- [Link to code:](../Hash-Left-Join/index.js)

- [Link to PR:](https://github.com/Keelen-Fisher/data-structures-and-algorithms/pull/65)

- [Link to test:](../Hash-Left-Join/__tests__/hashJoin.test.js)
