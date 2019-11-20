import axios from 'axios';

// export const queryTodoListData = url => axios.get(url);
export const queryTodoListData = function (url) {
    return axios.get(url);
};
