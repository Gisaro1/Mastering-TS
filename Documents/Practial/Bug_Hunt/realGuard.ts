interface Settings {
  theme: "light" | "dark";
  fontSize: number;
  notifications: boolean;
}

function patchSettings<T>(
  current: T,
  updates: Partial<T>
): T {
  return { ...current, ...updates };
}

const settings: Settings = {
  theme: "dark",
  fontSize: 14,
  notifications: true,
};

// Should this compile?
const next = patchSettings(settings, { fontSize: 18});