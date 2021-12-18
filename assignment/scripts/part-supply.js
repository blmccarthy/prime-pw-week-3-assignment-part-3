console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40
//    & console.log the variable
let partsNeeded = 40;
console.log('1. Number of partsNeeded:', partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
let supplyChanges = [ 3, 5, -6, 0, 7, 11 ]
console.log('2. Array of supplyChanges:', supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:', supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges'
//    array & console.log the value removed.
removedItem = supplyChanges.pop();
console.log('4. Removed item:', removedItem);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
supplyChanges.push(25)
console.log('5. Adding 25 to supplyChanges.', supplyChanges);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.'
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.'

console.log('6. Showing supplyChanges...');

for( x in supplyChanges) {
  if(supplyChanges[x] > 0) {
    console.log('Added', supplyChanges[x], 'parts.');
  } // Logs positive changes to supplyChanges.

  else if(supplyChanges[x] === 0) {
    console.log('No Change.');
  } // Logs when no adjustments are made

  else {
    console.log('Removed', supplyChanges[x] * -1, 'parts.');
  } // Logs when parts are deducted from supplyChanges.
    // added <* -1> so that the log report makes sense in the log :)
}


// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop.
console.log('7. Showing supplyChanges with "for of" loop');

for(changes of supplyChanges) {
  if (changes > 0) {
    console.log('Added', changes, 'parts.');
  }
  else if (changes < 0) {
    console.log('Removed', changes * -1, 'parts.');
  } // Again, adding the <* -1> to make more grammatical sense in the log.
  else {
    console.log('No Change.');
  } // Swapped 'no change' condition at the end as the 'else' condition as it
    // doesn't make a difference other than seeming more logical sequence of events
    // to me ¯\_(ツ)_/¯
}

// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('8. Total supplies available is:' );
let sum = 0;
for (let i = 0; i < supplyChanges.length; i++) {
    sum += supplyChanges[i];
}
console.log('Individual Changes:', supplyChanges); // Adding log to confirm all individual changes in the array
console.log('Total Number of parts:', sum);

// 9. We have a large stash of parts in our warehouse that we
//    need to box up and get ready for shipment.
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.

console.log('9. Filling boxes with a "while" loop');
let surplusStorage = 572;
let boxes = 0;
console.log('Total Parts at the Warehouse:', surplusStorage);

while (surplusStorage >= 7) { // Subtracts 7 parts and fills 1 box until there are less than 7 parts left
  surplusStorage = surplusStorage - 7;
  boxes++;
}
console.log('Boxes Filled:', boxes);
console.log('Parts Leftover', surplusStorage);
