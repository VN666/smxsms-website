import CryptoJS from "crypto-js";

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

const getFileName = (file) => file.substr(0, file.lastIndexOf("."));

const getFileExt = (file) => file.substring(file.lastIndexOf(".") + 1, file.length);

const downloadFile = (filePath) => {
	let a = document.createElement("a");
	a.setAttribute("href", filePath);
	if (["png", "jpeg", "jpg", "gif", "svg"].includes(getFileExt(filePath)))
		a.setAttribute("target", "_blank");
	a.click();
};

const pickImgSrc = (htmlStr) => {
	const imgReg = /<img.*?(?:>|\/>)/gi;
	const srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
	let srcArr = [];
	let imgArr = htmlStr.match(imgReg) || [];
	imgArr.forEach((item) => {
		srcArr.push(item.match(srcReg)[1]);
	});
	return srcArr;
};

const encodeBase64 = (words) => {
	return CryptoJS.SHA256(words + "smxdezx").toString();
}

const getAbsolutePath = (url) => {
	const tempUrl = url.split("//")[1];
	return tempUrl.substring(tempUrl.indexOf("/") + 1, tempUrl.length);
}

export default {
	getStrLength,
	timeFormate,
	getFileName,
	getFileExt,
	downloadFile,
	pickImgSrc,
	encodeBase64,
	getAbsolutePath
};




