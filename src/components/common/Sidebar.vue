<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            // 这边配合修改路由跳转的url
            return {
                items: [
                    {
                        icon: 'el-icon-edit',
                        index: 'basecharts',
                        title: '基础图表'
                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'baseform',
                        title: '基础表单'
                    },
                    {
                        icon: 'el-icon-info',
                        index: 'basetable',
                        title: '基础表格'
                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'drag',
                        title: '表格拖拽'
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 180px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
    .sidebar .el-menu-item {
        color: #fff;
    }
</style>
