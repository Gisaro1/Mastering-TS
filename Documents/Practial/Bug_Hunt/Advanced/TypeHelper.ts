type ConnectionState =
  | { status: "disconnected" }
  | { status: "connecting"; attempt: number }
  | { status: "connected"; sessionId: string }
  | { status: "error"; message: string; retryable: boolean };

function getSessionId(state: ConnectionState): string {
  if (state.status === "connected") {
    return state.sessionId;
  }
  throw new Error(`Something went wrong`)
}

function canRetry(state: ConnectionState): boolean {
  if (state.status === "error") {
    return state.retryable;
  }
  throw new Error(`stats is not equal to error`); // problem
}

function describe(state: ConnectionState): string {
  switch (state.status) {
    case "disconnected":
      return "Not connected";
    case "connecting":
      return `Attempt ${state.attempt}`;
    case "connected":
      return `Session ${state.sessionId}`;
    case "error":
        return state.message;
    default:
        const unHandled: never = state;
        return unHandled;
  }
}