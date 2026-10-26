type FetchState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string }
  | { status: "stale"; data: T; fetchedAt: number };

function getData<T>(state: FetchState<T>): T {
  if (state.status === "success") {
    return state.data;
  }
  throw new Error("Data is only available in the succes block")
}

function handleState<T>(state: FetchState<T>): string {
  switch (state.status) {
    case "idle":
      return "Waiting...";
    case "loading":
      return "Loading...";
    case "success":
      return `Got data`;
    // missing error case
    case "error":
        return state.error
    case "stale":
        return `${state.fetchedAt}`
    default:
        assertNever(state)
  }
}

function assertNever(x: never): never {
  throw new Error(`Unhandled: ${JSON.stringify(x)}`);
}