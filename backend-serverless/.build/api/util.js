var getResponseHeaders = function () {
    return {
        'Access-Control-Allow-Origin': '*',
    };
};
var getUserId = function (headers) {
    return headers.app_user_id;
};
var getUserName = function (headers) {
    return headers.app_user_name;
};
module.exports = {
    getResponseHeaders: getResponseHeaders,
    getUserId: getUserId,
    getUserName: getUserName,
};
//# sourceMappingURL=util.js.map