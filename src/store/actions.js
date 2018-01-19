import http from "axios"
import Api from "@/Api/index.js"

export default{
    login ({commit},userObj) {
        return http.get(Api.host + "/users?phone=" + userObj.phone).then(res => {
            if (res.data.length > 0) {
                //登录
                commit("LOGIN",res.data[0])
                return {'msg': '登录成功'}
            } else {
                //注册
                return http.post(Api.host + "/users",userObj).then(res => {
                    commit("LOGIN",res.data)
                    return {'msg': '注册成功'}
                })
            }
        })
    }
}