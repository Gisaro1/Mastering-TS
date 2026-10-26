type Interval = Readonly<[number, number]>;

function merge(intervals: Interval[]): Interval[] {
  intervals.sort((a, b) => a[0] - b[0]);
  const result: Interval[] = [];

  for (const cur of intervals) {
    const last = result[result.length - 1];
    if (last && cur[0] <= last[1]) {
      result[result.length - 1] = [last[0], Math.max(last[1], cur[1])];
    } else {
      result.push(cur);
    }
  }
  return result;
}