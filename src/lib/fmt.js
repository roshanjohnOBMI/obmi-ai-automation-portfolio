export const n0 = (n) => Math.round(n).toLocaleString("en-GB");
export const h = (n) => (Math.abs(n) >= 100 ? n0(n) : n.toLocaleString("en-GB", { maximumFractionDigits: 1 }));
export const mins = (hours) => {
  const m = hours * 60;
  return m < 1 ? `${Math.round(m * 60)} sec` : `${m >= 10 ? Math.round(m) : m.toFixed(1).replace(/\.0$/, "")} min`;
};
