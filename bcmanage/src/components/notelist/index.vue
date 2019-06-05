<template>
    <el-main class="nodebook-list-container">
        <el-table :data="noteListData.data" stripe style="width: 100%">
            <el-table-column prop="id" label="id" width="50px"></el-table-column>
            <el-table-column prop="title" label="标题" width="150px"></el-table-column>
            <el-table-column label="内容" show-overflow-tooltip>
                <template slot-scope="scope">
                    <div class="nodebook-list-row-content" v-html="scope.row.content.replace(/(<[^>]*>|\s+|\r|\n|&nbsp;)/gi, '')"></div>
                </template>
            </el-table-column>
            <el-table-column prop="created_at" label="创建时间" width="180px"></el-table-column>
            <el-table-column prop="uid" label="作者" width="100px"></el-table-column>
            <el-table-column prop="author" label="指导老师" width="100px"></el-table-column>
            <el-table-column label="操作" width="200px" >
                <template slot-scope="scope">
                    <el-button type="success" plain @click="modContent(scope.row)">修改</el-button>
                    <el-button type="warning" plain  @click="delContent(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next"
            :total="noteListData.total"
            :page-size="noteListData.pageSize"
            @current-change="pageChange"
        ></el-pagination>
    </el-main>
</template>

<script>
import './style.less';
import evtHub from '@/common/eventHub.js'
export default {
    name: "NoteList",
    props: {
        noteListData: {
            type: Object,
            required: true
        }
    },
    data() {
        return  {
            evtHub: evtHub
        }
    },
    methods: {
        pageChange(val) {
            this.evtHub.$emit('pageChange.list', val);
        },
        delContent(row) {
            this.evtHub.$emit('delCol.list', row);
        },
        modContent(row) {
            this.evtHub.$emit('modCol.list', row);
        }
    }
};
</script>