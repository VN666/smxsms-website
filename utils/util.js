const getStrLength = (str) => {
	let count = str.length;
	for (let i = 0, size = str.length; i < size; i++) {
		let cu = str.charCodeAt(i);
		if (cu >= 0xD800 && cu <= 0xDBFF && i < (size - 1)) {
			let next = str.charCodeAt(i + 1);
			if (next >= 0xDC00 && next <= 0xDFFF) {
				count--;
				i++;
			}
		}
	}
	return count;
};

const timeFormate = (date) => {
	return date.getFullYear() + "-" + String((Number(date.getMonth()) + 1)).padStart(2, "0") + "-" + String(date.getDate()).padStart(2, "0") + " " + String(date.getHours()).padStart(2, "0") + ":" + String(date.getMinutes()).padStart(2, "0") + ":" + String(date.getSeconds()).padStart(2, "0")
}

export default {
	getStrLength,
	timeFormate
};




