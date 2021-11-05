/**
 * Instructions:
 *
 * Start by converting this file to a TypeScript.
 *
 * Then see if you can create a type for the status argument by combining
 * what you know about literal types and union types.
 *
 * See 'literalTypes.ts' and 'utilityTypes.ts' in
 * examples if you need some direction.
 *
 * Run this file with "yarn getStatusMessage"
 */

function getStatusMessage(status) {
  const statusMessageMap = {
    initial: "Please submit your info.",
    loading: "Loading...",
    success: "Congratulations! Your info has been submitted.",
    error: "Whoops! Looks like we encountered an error.",
  };

  return statusMessageMap[status];
}

console.log(getStatusMessage("initial"));
console.log(getStatusMessage("fetching"));
console.log(getStatusMessage("finished"));
console.log(getStatusMessage("error"));
