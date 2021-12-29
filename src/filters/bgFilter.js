// export const bgFilter = v => v ? v.replace(/background-color: #ffffff;/g, "background-color: #F2F2F2;") : "";

export const bgFilter = (htmlStr) => {
	if (!htmlStr) return;
	const pReg = /<p.*?(?:>|\/>)/gi;
	const bgReg = /background-color: [\#]?([0-9a-zA-Z]*)[\;]?/i;
	let pArr = htmlStr.match(pReg) || [];
	let srcArr = [];
	pArr.forEach((item) => {
		if (bgReg.test(item))
		srcArr.push(item.match(bgReg)[1]);
	});
	srcArr = srcArr.reduce((acc, cur) => ((!acc.includes(cur) ? acc.push(cur) : ""), acc), []);
	srcArr.forEach((item) => {
		let reg = RegExp(`background-color: #${item}`, "g");
		htmlStr = htmlStr.replace(reg, "background-color: #F2F2F2");
	});
	return htmlStr;
}

export const removeHtmlTag = (htmlStr) => {
	if (!htmlStr) return "";
	const reg = /<\/?.+?\/?>/g;
	return htmlStr.replace(reg, "").replace(/&nbsp;/g, "");
}

export const subText = (html) => {
	return html.substr(200) + "..."
}
