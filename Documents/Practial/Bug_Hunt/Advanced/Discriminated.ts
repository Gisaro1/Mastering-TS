type PaymentResult =
  | {
      status: "success";
      transactionId: string;
      amount: number;
    }
  | {
      status: "failed";
      error: string;
    }
  | {
      status: "pending";
      retryAfter: number;
    };

function handlePayment(result: PaymentResult): string {
  if (result.status === "success") {
    return `Paid: ${result.amount}`;
  }

  if ("error" in result) {
    return result.error.toUpperCase();
  }

  return `${result.retryAfter}`;
}

function getPaymentValue(result: PaymentResult): number {
  if (result.status === "success") {
    return result.amount;
  }

  return 0;
}

function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${value}`);
}

function processPayment(result: PaymentResult): string {
  switch (result.status) {
    case "success":
      return result.transactionId;

    case "failed":
      return result.error;

    case "pending":
        return` ${result.retryAfter}`
    default:
        return assertNever(result);
  }
}