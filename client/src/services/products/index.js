export function getTotal(items) {
  const total = items.reduce(
    (total, num) => total + num.price * num.quantity,
    0
  );

  return total;
}

export function isInCart(id, items) {
  const item = items.find((item) => {
    return item.id === id;
  });
  if (item) {
    return true;
  }
  return false;
}
