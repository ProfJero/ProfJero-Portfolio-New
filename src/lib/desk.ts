export type Enquiry = {
  id: string;
  kind: "message" | "quote";
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  subject: string;
  message: string;
  createdAt: string;
};

export type Booking = {
  id: string;
  ref: string;
  studio: string;
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  note: string;
  createdAt: string;
};

type DeskState = { enquiries: Enquiry[]; bookings: Booking[] };

const KEY = "profjero-desk";

function read(): DeskState {
  if (typeof window === "undefined") return { enquiries: [], bookings: [] };
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { enquiries: [], bookings: [] };
    const parsed = JSON.parse(raw) as DeskState;
    return {
      enquiries: parsed.enquiries ?? [],
      bookings: parsed.bookings ?? [],
    };
  } catch {
    return { enquiries: [], bookings: [] };
  }
}

function write(state: DeskState) {
  localStorage.setItem(KEY, JSON.stringify(state));
  window.dispatchEvent(new Event("profjero-desk"));
}

export function listDesk() {
  return read();
}

export function addEnquiry(entry: Omit<Enquiry, "id" | "createdAt">) {
  const state = read();
  const enquiry: Enquiry = {
    ...entry,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  state.enquiries.unshift(enquiry);
  write(state);
  return enquiry;
}

export function addBooking(entry: Omit<Booking, "id" | "ref" | "createdAt">) {
  const state = read();
  const ref = `PJ-${Math.floor(1000 + Math.random() * 9000)}`;
  const booking: Booking = {
    ...entry,
    id: crypto.randomUUID(),
    ref,
    createdAt: new Date().toISOString(),
  };
  state.bookings.unshift(booking);
  write(state);
  return booking;
}

export function findBooking(ref: string) {
  const needle = ref.trim().toUpperCase();
  return read().bookings.find((b) => b.ref.toUpperCase() === needle) ?? null;
}
