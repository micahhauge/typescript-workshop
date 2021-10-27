function getStatusMessage(status) {
  const statusMessageMap = {
    initial: "Please submit your info.",
    loading: "Loading...",
    success: "Congratulations! Your info has been submitted.",
    error: "Whoop! Looks like we encountered an error.",
  };

  return statusMessageMap[status];
}

export { getStatusMessage };
