function isValid(s: string): boolean {
  const pairs: Record<string, string> = { ")": "(", "]": "[", "}": "{" };
  const stack: string[] = [];

  for (const ch of s) {
    if (ch in pairs) {
      const top = stack.pop();
      if (top !== ch) return false;
    } else {
      stack.push(ch);
    }
  }
  return stack.length === 0;
}