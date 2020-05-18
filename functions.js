// Implement the filter Method on a Prototype

Array.prototype.myFilter = function (callback) {
   // this is my filter function that returns a new array that only contains items that pass the filter
   var newArray = [];
   for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
         newArray.push(this[i]);
      }
   }
   return newArray;
};

function filterOutLowValues(inputArray, threshold) {
   //Filters out any value in the array that is lower than threshold.

   var outputArray = inputArray.myFilter(function (item) {
      return item >= threshold;
   }); // runs the filter function on each item in the array

   return outputArray;
}

// Return Part of an Array Using the slice Method

// Remove Elements from an Array Using slice Instead of splice

// Combine Two Arrays Using the concat Method

// Add Elements to the End of an Array Using concat Instead of push

// Use the reduce Method to Analyze Data

// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem

// Sort an Array Alphabetically using the sort Method

// Split a String into an Array Using the split Method

// Combine an Array into a String Using the join Method

// Apply Functional Programming to Convert Strings to URL Slugs

// Use the every Method to Check that Every Element in an Array Meets a Criteria

// Use the some Method to Check that Any Elements in an Array Meet a Criteria
