import { useMemo, useState } from "react";
import { formatMoney } from "@/lib/content";

const STOCK = [
  { id: "para", name: "Paracetamol 500", price: 8 },
  { id: "ors", name: "ORS sachet", price: 3 },
  { id: "amox", name: "Amoxicillin", price: 18 },
  { id: "vita", name: "Vitamin C", price: 12 },
  { id: "cough", name: "Cough syrup", price: 25 },
  { id: "plaster", name: "Plaster roll", price: 6 },
];

export function PosDemo() {
  const [qty, setQty] = useState<Record<string, number>>({});
  const [stock, setStock] = useState<Record<string, number>>({
    para: 40, ors: 60, amox: 18, vita: 24, cough: 11, plaster: 30,
  });
  const [sales, setSales] = useState<{ name: string; total: number }[]>([]);

  const lines = STOCK.filter((item) => (qty[item.id] ?? 0) > 0);
  const total = lines.reduce((sum, item) => sum + item.price * (qty[item.id] ?? 0), 0);

  const today = useMemo(() => sales.reduce((sum, sale) => sum + sale.total, 0), [sales]);

  function add(id: string) {
    if ((stock[id] ?? 0) <= (qty[id] ?? 0)) return;
    setQty((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }

  function checkout() {
    if (!lines.length) return;
    setStock((prev) => {
      const next = { ...prev };
      for (const item of lines) next[item.id] = (next[item.id] ?? 0) - (qty[item.id] ?? 0);
      return next;
    });
    setSales((prev) => [{ name: lines.map((l) => l.name).join(", "), total }, ...prev].slice(0, 5));
    setQty({});
  }

  return (
    <div className="overflow-hidden rounded-card border border-line bg-card">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <p className="font-display text-2xl">Counter</p>
        <p className="text-sm text-muted tabular-nums">Today {formatMoney(today, "GHS")}</p>
      </div>
      <div className="grid gap-4 p-4 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {STOCK.map((item) => {
            const left = (stock[item.id] ?? 0) - (qty[item.id] ?? 0);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => add(item.id)}
                disabled={left <= 0}
                className="rounded-2xl border border-line px-3 py-3 text-left hover:border-brand disabled:opacity-40"
              >
                <span className="block text-sm font-medium">{item.name}</span>
                <span className="mt-1 block text-sm text-muted tabular-nums">{formatMoney(item.price, "GHS")}</span>
                <span className="mt-2 block text-xs text-gold tabular-nums">{left} in stock</span>
              </button>
            );
          })}
        </div>
        <div className="flex flex-col rounded-2xl bg-paper p-3">
          <p className="text-xs tracking-[0.14em] text-gold uppercase">This sale</p>
          <ul className="mt-2 flex-1 space-y-2 text-sm">
            {lines.length === 0 && <li className="text-muted">Tap an item. Stock falls when you take payment.</li>}
            {lines.map((item) => (
              <li key={item.id} className="flex justify-between gap-3">
                <span>{qty[item.id]} × {item.name}</span>
                <span className="tabular-nums">{formatMoney(item.price * (qty[item.id] ?? 0), "GHS")}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 flex justify-between font-display text-2xl">
            <span>Due</span>
            <span className="tabular-nums">{formatMoney(total, "GHS")}</span>
          </p>
          <button
            type="button"
            onClick={checkout}
            disabled={!lines.length}
            className="mt-3 min-h-11 rounded-full bg-brand text-sm font-medium text-on-brand disabled:opacity-40"
          >
            Take payment
          </button>
        </div>
      </div>
    </div>
  );
}
