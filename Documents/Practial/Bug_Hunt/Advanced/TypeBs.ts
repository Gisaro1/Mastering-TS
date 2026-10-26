type EventMap = {
  "user:login": { userId: string; timestamp: number };
  "user:logout": { userId: string };
  "data:load": { resource: string; success: boolean };
};

class EventBus<T extends Record<string, any>> {
  private listeners: {
    [K in keyof T]?: Array<(payload: T[K]) => void>;
  } = {};

  on<K extends keyof T>(event: K, handler: (payload: T[K]) => void): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event]!.push(handler);
  }

  emit(event: keyof T, payload: any): void {
    const handlers = this.listeners[event];
    if (handlers) {
      handlers.forEach((h) => h(payload));
    }
  }
}

const bus = new EventBus<EventMap>();

bus.on("user:login", (data) => {
  console.log(data.userId, data.timestamp);
});

bus.emit("user:login", { userId: "abc", timestamp: Date.now() });

// These should be rejected by TypeScript
bus.emit("user:login", { userId: 123 });
bus.emit("user:logout", { userId: "abc", timestamp: 123 });
bus.emit("unknown:event", { foo: "bar" });