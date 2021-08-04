export const normalizeMoneyValue = (value) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
