import CryptoJS from "crypto-js";
import Vue from "vue";

const _this = Vue.prototype;

const DOMAIN = "www.smxsdezx.cn";

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

const getFileOriginalname = (file) => file.substring(file.lastIndexOf("/") + 1);

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
	const videoReg = /<source.*?(?:>|\/>)/gi;
	const srcReg2 = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
	let videoArr = htmlStr.match(videoReg) || [];
	videoArr.forEach((item) => srcArr.push(item.match(srcReg2)[1]));
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

const sweepPicsrc = (content, picsrc) => ({
	picSrc: picsrc.filter((src) => RegExp(src).test(content)),
	removeSrc: picsrc.filter((src) => !RegExp(src).test(content)).filter((src) => src.includes(DOMAIN))
});

const encodeBase64 = (words) => {
	return CryptoJS.SHA256(words + "smxsdezx").toString();
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

const delCookie = (name, value = "", path = "/") => {
	const domain = window.location.href.includes("smxsdezx.cn") ? "smxsdezx.cn" : "";
	document.cookie = `${name}=${value};expires=-1;path=${path};domain=${domain}`;
}

const validUsername = (username) => {
	const reg = /^[a-zA-Z0-9_]{1,}$/g;
	return reg.test(username);
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
	delCookie,
	sweepPicsrc,
	getFileOriginalname,
	validUsername
};




