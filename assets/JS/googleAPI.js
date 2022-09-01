




const request = new PaymentRequest(
  buildSupportedPaymentMethodData(),
  buildShoppingCartDetails()
);
function buildSupportedPaymentMethodData() {
  // Example supported payment methods:
  return [{ supportedMethods: "https://example.com/pay" }];
}

function buildShoppingCartDetails() {
  // Hardcoded for demo purposes:
  return {
    id: "order-123",
    displayItems: [
      {
        label: "Example item",
        amount: { currency: "USD", value: "1.00" },
      },
    ],
    total: {
      label: "Total",
      amount: { currency: "USD", value: "1.00" },
    },
  };
}

request.show().then((paymentResponse) => {
  // Here we would process the payment. For this demo, simulate immediate success:
  paymentResponse.complete('success')
    .then(() => {
      // For demo purposes:
      introPanel.style.display = 'none';
      successPanel.style.display = 'block';
    });
})
