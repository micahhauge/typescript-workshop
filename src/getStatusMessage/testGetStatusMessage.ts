import { getStatusMessage } from "./getStatusMessage.js";

console.log(`Status for initialized:  ${getStatusMessage("initialized")}`);
console.log(`Status for loading:  ${getStatusMessage("loading")}`);
console.log(`Status for finished:  ${getStatusMessage("finished")}`);
console.log(`Status for error:  ${getStatusMessage("error")}`);
