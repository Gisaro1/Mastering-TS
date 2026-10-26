abstract class Notification<T> {
  constructor(protected readonly payload: T) {}

  abstract send(data: T): Promise<boolean>;

  getPayload(): T {
    return this.payload;
  }
}

interface EmailPayload {
  to: string;
  subject: string;
  body: string;
}

class EmailNotification extends Notification<EmailPayload> {
  override send(data: EmailPayload): Promise<boolean> {
    console.log(`Sent to ${data}`)
    return Promise.resolve(true);
  }
}

class SMSNotification extends Notification<string> {
  constructor(payload: string) {
    super(payload)
  }

  override send(data: string): Promise<boolean> {
    console.log(`Sending SMS:${data}`);
    return Promise.resolve(true);
  }
}

const notification: Notification<EmailPayload> = new EmailNotification({
  to: "peter@gmail.com",
  subject: "Hello",
  body: "Welcome",
});

notification.send({
  to: "peter@gmail.com",
  subject: "Hello",
  body: "Welcome",
});