<template>
    <div class="header">
        <div class="logo">后台管理系统</div>
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../../assets/img/pic_s.png">
                    {{username}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
    // import { logout } from '../../api/https'
    export default {
        data() {
            return {
                name: ''
            }
        },
        computed:{
            username(){
                // 这是拿vuex里面的那么值的方法，还可以用其他方法拿比如mapGetters 辅助函数。一定要看文档，不然会晕
                console.log(this.$store.getters.name)
                return this.$store.getters.name;
            }
        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout'){
                    // 返回到登录页
                    this.$router.push('/login');
                    // logout().then(data=>{
                    //     if(data.data.code == '00000'){
                    //         localStorage.removeItem('ms_username')
                    //         this.$router.push('/login');
                    //     }
                    // })
                }
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
    }
    .header .logo{
        float: left;
        width:250px;
        text-align: center;
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:20px;
        width:30px;
        height:30px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>
