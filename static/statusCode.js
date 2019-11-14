module.exports = {
    OK:200, // 请求成功
    NO_CONTENT:204, // 请求已成功处理，但是没有内容返回
    BAD_REQUEST:400, // 表示请求报文存在语法错误或参数错误，服务器不理解
    UNAUTHORIZED:401, // 表示发送的请求需要有HTTP认证信息或者是认证失败了 
    FORBIDDEN:403, // 表示对请求资源的访问被服务器拒绝了 
    NOT_FOUND:404, // 表示服务器找不到你请求的资源 
    INTERNAL_SERVER_ERROR:500, // 表示服务器执行请求的时候出错了
    SERVICE_UNAVAILABLE:503 // 表示服务器超负载或正停机维护，无法处理请求 
}