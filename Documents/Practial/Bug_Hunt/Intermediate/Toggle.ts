interface FeatureFlags {
  darkMode: boolean;
  betaAccess: boolean;
  analytics: boolean;
  notifications: boolean;
}

function toggleFlag<R extends keyof FeatureFlags>(
  flags: FeatureFlags,
  key: R
): FeatureFlags {
  return {
    ...flags,
    [key]: !flags[key],
  };
}

const flags: FeatureFlags = {
  darkMode: false,
  betaAccess: true,
  analytics: false,
  notifications: true,
};

toggleFlag(flags, "darkMode");     // should be OK
toggleFlag(flags, "theme");        // should be error