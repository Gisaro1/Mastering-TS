interface Settings {
  theme: "light" | "dark";
  language: string;
  notifications: boolean;
  fontSize: number;
}

function updateSettings<K extends keyof Settings>(
  current: Settings,
  key: K,
  value: Settings[K]
): Settings {
  return { ...current, [key]: value };
}

const settings: Settings = {
  theme: "dark",
  language: "en",
  notifications: true,
  fontSize: 14,
};

// These should be errors
updateSettings(settings, "theme", "light");
updateSettings(settings, "fontSize", 14);