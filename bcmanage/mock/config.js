const Mock = require('mockjs');
import P_internal_auth_login from './POST/internal/auth/login'
import P_internal_auth_register from './POST/internal/auth/register'
import P_internal_auth_logout from './POST/internal/auth/logout'
import P_internal_auth_user_info from './POST/internal/auth/user_info'
import P_internal_article_store from './POST/internal/article/store'
import P_internal_article from './POST/internal/article'
import P_internal_article_destroy from './POST/internal/article/destroy'
// Mock.mock( url, post/get , 返回的数据);
// 登录
Mock.mock('/internal/auth/login', 'post', P_internal_auth_login);
// 注册
Mock.mock('/internal/auth/register', 'post', P_internal_auth_register);
// 登出
Mock.mock('/internal/auth/logout', 'post', P_internal_auth_logout);
// 获取用户信息
Mock.mock('/internal/auth/user_info', 'post', P_internal_auth_user_info);
// 添加学员笔记
Mock.mock('/internal/article/store', 'post', P_internal_article_store);
// 学员笔记列表
Mock.mock('/internal/article', 'post', P_internal_article);
// 学员笔记删除
Mock.mock('/internal/article/destroy', 'post', P_internal_article_destroy);