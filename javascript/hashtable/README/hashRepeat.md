# HashMap Repeated Word -> Code Challenge 31

## Challenge

- Find the first repeated word in a book.

## Feature Tasks

- Write a function called repeated word that finds the first word to occur more than once in a string

- Arguments: string
- Return: string

## API

- The approach is to read into documents that discuss hashmap and learn about how to map through a string of words. Since we are looking for the first repeated word, there may be a conditional statement(s) tp determine if a particular string is equal to the next.

- There is a way to map throughout a string and find the repeated word using the find method with word and index passed as its arguments.

## Expectations: Input and Output

- Input:

> "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."

- Output:

> "it"

- [Link to code:](../HashCode/hashRepeat.js)

- [Link to PR:](https://github.com/Keelen-Fisher/data-structures-and-algorithms/pull/60)

- [Link to HashCode Folder](https://github.com/Keelen-Fisher/data-structures-and-algorithms/tree/main/javascript/hashtable/HashCode)

- [Link to test:](https://github.com/Keelen-Fisher/data-structures-and-algorithms/blob/main/javascript/hashtable/__tests__/hashRepeat.test.js)
