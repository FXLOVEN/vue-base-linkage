
export const getCitys = function ({commit}, province_id) {
    commit({
        type: 'getCitys',
        province_id:province_id
    });
};

export const getAreas = function ({commit}, city_id) {
    commit({
        type: 'getAreas',
        city_id:city_id
    });
};
