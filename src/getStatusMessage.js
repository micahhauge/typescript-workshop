/**
 * Instructions:
 *
 * Start by converting this file to a TypeScript.
 *
 * Then see if you can create a type for the status argument by combining
 * what you know about literal types and union types.
 *
 * See 'literalTypes.ts' in examples if you need some direction.
 *
 */

function getStatusMessage(status) {
  const statusMessageMap = {
    initial: "Please submit your info.",
    loading: "Loading...",
    success: "Congratulations! Your info has been submitted.",
    error: "Whoop! Looks like we encountered an error.",
  };

  return statusMessageMap[status];
}

getStatusMessage("initial");
getStatusMessage("fetching");
getStatusMessage("finished");
