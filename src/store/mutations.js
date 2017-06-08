
export const getCitys = function (state, payload) {
    // 清空旧Citys、Areas
    state.myCitys = [];
    state.myAreas = [];

    // 获取信息Citys
    state.citys.forEach((item) => {
        if (item.upid === payload.province_id) {
            state.myCitys.push(item);
        }
    });
};

export const getAreas = function (state, payload) {
    // 清空旧Citys、Areas
    state.myAreas = [];

    //
    state.areas.forEach((item) => {
        if (item.upid === payload.city_id) {
            state.myAreas.push(item);
        }
    });
};