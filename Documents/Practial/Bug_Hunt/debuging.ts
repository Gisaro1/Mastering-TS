abstract class Notification<T> {
  constructor(protected readonly payload: T) {}

  abstract send(data: T): Promise<string>;

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
   send(data: EmailPayload): Promise<string> {
    return Promise.resolve(`Sent to ${data}`);
  }
}

class SMSNotification extends Notification<string> {
  super(payload: string) {
    this.payload = payload;
  }

   send(data: string): boolean {
    console.log(data);
    return true;
  }
}

const notification: EmailNotification=
  new EmailNotification({
    to: "peter@gmail.com",
    subject: "Hello",
    body: "Welcome"
  });

notification.send({ to: "peter@gmail.com" });