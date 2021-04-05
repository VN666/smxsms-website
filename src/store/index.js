import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const state = {
	phone: "",
	email: "",
	address: "",
	postCode: "",
	username: "",
	auths: "",
	departmentId: "",
	departmentName: ""
};

const mutations = {
    SET_PHONE (state, phone) {
        state.phone = phone;
    },
    SET_EMAIL (state, email) {
        state.email = email;
    },
    SET_ADDRESS (state, address) {
        state.address = address;
    },
    SET_POSTCODE (state, postCode) {
    	state.postCode = postCode
    },
    SET_USERNAME (state, username) {
    	state.username = username;
    },
    SET_AUTHS (state, auths) {
    	state.auths = auths;
    },
    SET_DEPARTMENTID (state, id) {
    	state.departmentId = id;
    },
    SET_DEPARTMENTNAME (state, name) {
    	state.departmentName = name;
    }
};

export default new Vuex.Store({
    state,
    mutations,
    plugins: [createPersistedState()]
});
