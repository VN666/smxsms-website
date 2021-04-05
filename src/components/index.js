import hBgImgs from "./h-bgImgs"
import hDropDownList from "./h-dropDownList"
import hHonor from "./h-honor"
import hPicRoll2 from "./h-picRoll2"
import hBlock from "./h-block"
import hHeader from "./h-header"
import hPanel from "./h-panel"
import hTinymce from "./h-tinymce"
import hBreadcrumb from "./h-breadcrumb"
import hNavigator from "./h-navigator"
import hPicRoll from "./h-picRoll"
import hSlide from "./h-slide";

const components = [
    hBgImgs,
    hDropDownList,
    hHonor,
    hPicRoll,
    hPicRoll2,
    hBlock,
    hHeader,
    hPanel,
    hTinymce,
    hBreadcrumb,
    hNavigator,
    hSlide
];

const install = (Vue) => {
	components.map((component) => {
		Vue.component(component.name, component);
	});
};

export default {
	install
};
