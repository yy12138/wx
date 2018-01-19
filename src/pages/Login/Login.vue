<template>
  <div class="login">
      <div class="login_wrap">
            <div class="title">注册/登录</div>
            <input type="tel" placeholder="请输入你的手机号码" v-model="phone"><br />
            <div class="button" @click="login">登录</div>
      </div>
  </div>
</template>
<script>
export default {
    data () {
        return {
            phone: ''
        }
    },
    methods: {
        login () {
            let reg = /^1[34578]\d{9}$/g
            if (reg.test(this.phone)){
                let userObj = {
                phone: this.phone
                }
                this.$store.dispatch("login",userObj).then(res => {
                    this.$msg({
                        title:'提示',
                        message:res.msg})
                })
            } else {
                this.$msg({
                    title:'提示',
                    message:'请输入正确的手机号码'})
            }
        }
    }
}
</script>

<style lang="less" scoped>
.login_wrap{
    margin: 190px auto;
    width: 400px;
    height: 200px;
    text-align: center;
    padding-top: 34px;
    box-sizing: border-box;
    background-image: url("./images/login_bac.jpg");
    background-color: rgba(255,255,255,0.1);
    background-size: cover;
    font-weight: 500;
    border-radius: 8px;
}
.title{
    margin-bottom: 15px;
}
.login_wrap > input{
    width: 220px;
    height: 30px;
    padding:2px 0 2px 7px;
    font-size: 22px;
    border-radius: 5px;
}
.button{
    display: inline-block;
    margin-top: 15px;
    width: 80px;
    height: 35px;
    line-height: 35px;
    border-radius: 5px;
    background-color: rgba(122, 122, 25, 0.7);
    color: #fff;
}
</style>

