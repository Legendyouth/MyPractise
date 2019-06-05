<template>
    <div class="student-notes-container">
        <el-container>
            <el-aside class="student-notes-sidebar" width="200px">
                <ul>
                    <li @click="jumpList" :class="!isDetail && 'active'">列表页</li>
                    <li @click="addContent" :class="isDetail &&  'active'">{{operaPName}}</li>
                </ul>
            </el-aside>
            <el-container class="nodebook-list-container">
                <el-container>
                    <el-header style="line-height: 60px" class="student-notes-header">
                        <div class="title">{{pageTitle}}</div>
                    </el-header>
                    <NoteList v-if="!isDetail" :noteListData="noteListData"/>
                    <NoteDetail v-if="isDetail" :noteDetailData="noteDetailData"/>
                    <section class="error-tip" v-if="errorTip">请填写完整内容</section>
                    <section style="text-align:center">
                        <el-button v-if="isDetail" type="primary" style="width:100px;"  @click="submitNote">保存</el-button>
                    </section>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import './style.less';
import NoteList from '@/components/notelist'
import NoteDetail from '@/components/notedetail'
import evtHub from '@/common/eventHub.js'
import Service from './service'
import {mapGetters} from 'vuex';
export default {
    name: "Studentnotes",
    components: {
        NoteList,
        NoteDetail
    },
    computed: {
        ...mapGetters(['USERINFO'])
    },
    data() {
        return {
            noteListData: {
                data: [],
                total: 0,
                page: 1,
                pageSize: 20,
                userName: ''
            },
            pageTitle: '学员笔记管理列表',
            operaPName: '创建笔记',
            isDetail: false,
            evtHub: evtHub,
            noteDetailData: {
                titleTxt: '',
                authorTxt: '',
                content: ''
            },
            errorTip: false,
            editorInstance: {},
            isMod: false
        };
    },
    mounted() {
        if(!this.USERINFO.uid) {
            this.$router.push({
                path: '/',
            })
        }
        this.evtListener();
        this.noteListData.userName = this.USERINFO.username;
        this.getList();
    },
    methods: {
        getList() {
            let params = {
                uid: this.USERINFO.uid,
                page: this.noteListData.page,
                limit: this.noteListData.pageSize
            }
            Service('/internal/article', params).then(res => {
                if(res.errcode === 200) {
                    this.noteListData.data = res.data;
                    this.noteListData.pageSize = res.limit;
                    this.noteListData.total = res.total;
                }
            });
        },
        uploadNote() {
            let {authorTxt, content, titleTxt, id} = this.noteDetailData;
            let params = {
                uid: this.USERINFO.uid,
                author: authorTxt,
                title: titleTxt,
                content: content
            }
            this.isMod && (params.id = id);
            Service('/internal/article/store', params).then(res => {
                if(res.errcode === 200) {
                    this.noteListData.page = 1;
                    this.isDetail = false;
                    this.isMod = false;
                    this.operaPName = '创建笔记';
                    this.pageTitle = '学员笔记管理列表';
                    this.noteDetailData = {
                        titleTxt: '',
                        authorTxt: '',
                        content: ''
                    }
                    this.getList();
                }
            });
        },
        jumpList() {
            this.isDetail = false;
            this.isMod = false;
            this.operaPName = '创建笔记';
            this.pageTitle = '学员笔记管理列表';
            this.noteDetailData = {
                titleTxt: '',
                authorTxt: '',
                content: ''
            }
        },
        delArticle(data) {
            let params = {
                id: data.id,
                uid: data.uid
            }
            Service('/internal/article/destroy', params).then(res => {
                if(res.errcode === 200) {
                    this.getList();
                }
            });
        },
        submitNote() {
            this.noteDetailData.content = this.editorInstance.getContent();
            let {authorTxt, content, titleTxt} = this.noteDetailData;
            this.errorTip = false;
            if (authorTxt && content && titleTxt) {
                this.uploadNote();
            } else {
                this.errorTip = true;
            }
        },
        addContent(ind) {
            this.errorTip = false;
            this.isDetail = true;
            this.pageTitle = '创建笔记';
        },
        evtListener() {
            this.evtHub.$on('editor.data', editorInstance => {
                this.editorInstance = editorInstance;
            });
            this.evtHub.$on('pageChange.list', val => {
                this.noteListData.page = val;
                this.getList();
            })
            this.evtHub.$on('delCol.list', data => {
                this.delArticle(data);
            })
            this.evtHub.$on('modCol.list', data => {
                let {title, author, content, id} = data;
                this.noteDetailData = {
                    id: id,
                    titleTxt: title,
                    authorTxt: author,
                    content: content
                }
                this.$store.dispatch('getNodeListSingleData',data);
                this.isDetail = true;
                this.errorTip = false;
                this.isMod = true;
                this.operaPName = '编辑';
                this.pageTitle = '编辑';
            })
        }
    }
};
</script>