//#region node_modules/.nitro/vite/services/ssr/assets/desk-D91l8YCI.js
var KEY = "profjero-desk";
function read() {
	if (typeof window === "undefined") return {
		enquiries: [],
		bookings: []
	};
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return {
			enquiries: [],
			bookings: []
		};
		const parsed = JSON.parse(raw);
		return {
			enquiries: parsed.enquiries ?? [],
			bookings: parsed.bookings ?? []
		};
	} catch {
		return {
			enquiries: [],
			bookings: []
		};
	}
}
function write(state) {
	localStorage.setItem(KEY, JSON.stringify(state));
	window.dispatchEvent(new Event("profjero-desk"));
}
function listDesk() {
	return read();
}
function addEnquiry(entry) {
	const state = read();
	const enquiry = {
		...entry,
		id: crypto.randomUUID(),
		createdAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	state.enquiries.unshift(enquiry);
	write(state);
	return enquiry;
}
function addBooking(entry) {
	const state = read();
	const ref = `PJ-${Math.floor(1e3 + Math.random() * 9e3)}`;
	const booking = {
		...entry,
		id: crypto.randomUUID(),
		ref,
		createdAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	state.bookings.unshift(booking);
	write(state);
	return booking;
}
function findBooking(ref) {
	const needle = ref.trim().toUpperCase();
	return read().bookings.find((b) => b.ref.toUpperCase() === needle) ?? null;
}
//#endregion
export { listDesk as i, addEnquiry as n, findBooking as r, addBooking as t };
