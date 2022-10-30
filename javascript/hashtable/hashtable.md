# Code Challenge: Hash Table Implementation

## Challenge

-Implement a Hash Table Class with the following methods:

## Feature Tasks

- set
  - Arguments: key, value
  - Returns: nothing
  - This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
  - Should a given key already exist, replace its value from the value argument given to this method.

- get
  - Arguments: key
  - Returns: Value associated with that key in the table

- has
  - Arguments: key
  - Returns: Boolean, indicating if the key exists in the table already.

- keys
  - Returns: Collection of keys

- hash
  - Arguments: key
  - Returns: Index in the collection for that key

## API

The approach is to apply the notes and lecture given by the instructor to create a fully fledged Hash Table.

- [Link to code:](index.js)

- [Link to PR:]()

- [Link to trees folder](https://github.com/Keelen-Fisher/data-structures-and-algorithms/tree/main/javascript/hashtable)

- [Link to test:]()

- ![UML](assets/HashTable%20Notes%20.png)

## Big Oh Based on the operations

- Time Complexity: O(n), for Search: O(1).
