<template>
    <div class="register-container">
        <el-dialog
            title="注册"
            :visible.sync="dialogVisible"
            width="30%"
            :show-close="isClose"
            :close-on-click-modal="isClose"
        >
            <section class="register-layer-wrap">
                <p>userName</p>
                <el-input
                    placeholder="请输入内容"
                    v-model="userName"
                    clearable
                    size="large"
                >
                </el-input>
                <section v-if="tips.isUserTip" class="user-tip tip">{{tips.userTip}}</section>
                <p>passWord</p>
                <el-input placeholder="请输入密码" v-model="passWord" size="large" show-password></el-input>
                <section v-if="tips.isPassTip" class="pass-tip tip">{{tips.passTip}}</section>
                <section v-if="tips.isCTip" class="common-tip tip">{{tips.cTip}}</section>
            </section>
            <span slot="footer" class="dialog-footer" style="text-align:center">
                <el-button @click="register">Sign up</el-button>
                <el-button @click="back">Cancel</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import './style.less';
import Service from './service'
export default {
    name: "Register",
    data() {
        return {
            isClose: false,
            dialogVisible: true,
            userName: '',
            passWord: '',
            isTip: false,
            tip: '',
            tips: {
                isUserTip: false,
                isPassTip: false,
                isCTip: false,
                userTip: '',
                passTip: '',
                cTip: ''
            }
        };
    },
    mounted() {
        
    },
    methods: {
        getRegisterMessage() {
            let params = {
                username: this.userName,
                password: this.passWord
            }
            Service('/internal/auth/register', params).then(res => {
                if(res.errcode === 200) {
                    
                }
                else {
                    this.tips.isCTip = true;
                    this.tips.cTip = res.errmsg;
                }
            });
        },
        register() {
            if(this.checkInput()) {
                this.getRegisterMessage()
                this.$alert('注册成功，点击确定为您跳转登录页', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$router.push({
                            path: '/',
                        })
                    }
                });
            }
        },
        checkInput() {
            this.tips = {
                isUserTip: false,
                isPassTip: false,
                isCTip: false,
                userTip: '',
                passTip: '',
                cTip: ''
            }
            if (!+this.userName.length || !+this.passWord.length) {
                this.tips.isCTip = true;
                this.tips.cTip = '用户名或密码不能为空';
            }
            else if (+this.passWord.length < 6 && +this.passWord.length < 20) {
                this.tips.isCTip = true;
                this.tips.cTip = '请输入6-20位密码';
            }
            else {
                this.tips.isCTip = false;
                this.tips.cTip = '';
                let regUser = new RegExp('[^\\dA-Za-z_\\u4e00-\\u9fa5]', 'g');
                let regPass = new RegExp('[^\\dA-Za-z_]', 'g');
                regUser.test(this.userName) 
                && (this.tips.isUserTip = true,this.tips.userTip = '只能输入中文、数字、字母、下划线');
                regPass.test(this.passWord) 
                && (this.tips.isPassTip = true,this.tips.passTip = '只能输入数字、字母、下划线');
            }
            return !this.tips.isUserTip && !this.tips.isPassTip && !this.tips.isCTip;
            
        },
        back() {
            this.$router.push({
                path: '/',
            })
        }
    }
};
</script>