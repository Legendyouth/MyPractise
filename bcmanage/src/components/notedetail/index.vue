<template>
    <div class="note-detail-container">
        <el-container>
            <el-container>
                <el-main class="note-detail-wrap">
                    <div>
                        <h3>标题</h3>
                        <el-input
                            placeholder="请输入标题"
                            v-model="noteDetailData.titleTxt"
                            show-word-limit
                            maxlength="20"
                        >
                        </el-input>
                    </div>
                    <div>
                        <h3>指导老师</h3>
                        <el-input
                            placeholder="请输入指导老师"
                            v-model="noteDetailData.authorTxt"
                            maxlength="10"
                            show-word-limit
                        >
                        </el-input>
                    </div>
                    <div>
                        <h3>正文</h3>
                        <Editor :content="noteDetailData.content"/>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import './style.less';
import Editor from '../editor';
export default {
    name: "NoteDetail",
    components: {
        Editor
    },
    props: {
        noteDetailData: {
            type: Object,
            required: true
        }
    }
};
</script>