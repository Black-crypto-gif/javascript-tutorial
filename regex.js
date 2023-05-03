const names = "John, Jane, Michael, Sarah, Adam, Alex, Amanda";

const regex = /\b\w*a\w*\b/g;

const matchingNames = names.match(regex);

console.log(matchingNames); // ["Jane", "Michael", "Sarah", "Adam", "Amanda"] 

/* 
Let's break down the regular expression /\b\w*a\w*\b/g:

\b is a word boundary, which matches the start or end of a word.
\w* matches zero or more word characters (letters, digits, or underscores).
a matches the letter "a".
\w* again matches zero or more word characters.
\b again matches a word boundary.
g is a global flag, which makes the regular expression search for all matches in the input string.
So the regular expression matches any word that contains the letter "a" in it, and we use the match() method of the string to extract all the matching words into an array.

Regular expressions can be quite powerful and flexible for pattern matching and data extraction, but they can also be complex and hard to read. It's important to use them judiciously and with care.

*/
