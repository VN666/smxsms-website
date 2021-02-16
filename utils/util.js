import CryptoJS from "crypto-js";
import Vue from "vue";

const _this = Vue.prototype;

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

// downLoadFile (blob, fileName) {
//         if ("download" in document.createElement("a")) {
//             let downloadElement = document.createElement("a");
//             let href = "";
//             if (window.URL)
//                 href = window.URL.createObjectURL(blob);
//             else
//                 href = window.webkitURL.createObjectURL(blob);
//             downloadElement.href = href;
//             downloadElement.download = fileName;
//             document.body.appendChild(downloadElement);
//             downloadElement.click();
//             if (window.URL)
//                 window.URL.revokeObjectURL(href);
//             else
//                 document.body.removeChild(downloadElement);
//         } else {
//             navigator.msSaveBlob(blob, fileName);
//         }
//     },

const downloadFile = (filePath) => {
	const message = _this.$message({ message: "正在下载，请耐心等待", duration: 0, type: "success" });
	_this.$http({
		method: "post",
		url: _this.$api.download,
		data: {
			target: filePath
		}
	}).then((res) => {
		message.close();
		const fileName = res.result.filename;
		const blob = new Blob([Buffer.from(res.result.buffer, "binary")]);
		if ("download" in document.createElement("a")) {
            let downloadElement = document.createElement("a");
            let href = "";
            if (window.URL)
                href = window.URL.createObjectURL(blob);
            else
                href = window.webkitURL.createObjectURL(blob);
            downloadElement.href = href;
            downloadElement.download = fileName;
            document.body.appendChild(downloadElement);
            downloadElement.click();
            if (window.URL)
                window.URL.revokeObjectURL(href);
            else
                document.body.removeChild(downloadElement);
        } else {
            navigator.msSaveBlob(blob, fileName);
        }
	});
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

const filterPicSrc = (htmlStr, picSrc) => {
	picSrc = picSrc.filter((item) => RegExp(item).test(htmlStr));
	pickImgSrc(htmlStr).forEach((src) => {
		if (!picSrc.includes(src)) picSrc.push(src);
	});
	picSrc = picSrc.filter((item) => item.includes("www.smxsdezx.cn"));
	return picSrc;
}

const encodeBase64 = (words) => {
	return CryptoJS.SHA256(words + "smxdezx").toString();
}

const getAbsolutePath = (url) => {
	const tempUrl = url.split("//")[1];
	return tempUrl.substring(tempUrl.indexOf("/") + 1, tempUrl.length);
}

const setCookie = (name = "Authorization", value, expires = 7200000, path = "/", domain = "") => {
    let exp = new Date();
    exp.setTime(exp.getTime() + expires);
    document.cookie = `${name}=${value};expires=${exp.toUTCString()};path=${path};domain=${domain}`;
}

const getCookie = (name) => {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) return unescape(arr[2]);
    else return "";
}

const delCookie = (name) => {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let value = getCookie(name);
    if (!!value) document.cookie = `${name}=${value};expires=${exp.toUTCString()}`;
}

export default {
	getStrLength,
	timeFormate,
	getFileName,
	getFileExt,
	downloadFile,
	pickImgSrc,
	filterPicSrc,
	encodeBase64,
	getAbsolutePath,
	setCookie,
	getCookie,
	delCookie
};




