<template>
  <div class="table-container">
   <div class="card-box">
    <el-row :gutter="10">
      <el-col :span="5">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="2"> 
        <el-button type="primary" @click="search">搜索按钮</el-button>
      </el-col>
    </el-row>
      <el-table
      :data="tableData"
      ref="table"
      border
      style="width: 100%"
       @selection-change="handleSelectionChange"
      >
       <el-table-column
           type="selection"
           width="55"
          align="center" />
       <el-table-column
        prop="date"
        label="日期"
        width="180"
         align="center" />
        <el-table-column
        prop="name"
        label="姓名"
        width="180" 
         align="center" />
         <el-table-column
        prop="address"
        label="地址"
         align="center" />
       <el-table-column
        fixed="right"
        label="操作"
        width="180"
         align="center" >
          <template slot-scope="scope">
                 <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
                  <el-button type="success" size="small"  @click="handleClick(scope.row,scope)">编辑</el-button>
                  <el-button type="danger" @click.native.prevent="deleteRow(scope.$index, tableData)" size="small">
                       移除
                  </el-button>
          
          </template>
         </el-table-column>
     </el-table>
     </div>
     <el-dialog title="编辑" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :model="form" status-icon :rules="rules">
        <el-form-item label="日期" :label-width="formLabelWidth" prop="date">
           <el-date-picker
            v-model="form.date"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd" 
            />
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
         <el-input v-model="form.name"></el-input>
        </el-form-item>
         <el-form-item label="收货地址" :label-width="formLabelWidth" prop="address">
         <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button  @click="dialogReset">重 置</el-button>
        <el-button type="primary" @click="dialogConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
       multipleSelection: [],
       dialogFormVisible: false,
       formLabelWidth: '120px',
       options: [{
          value: '黄金糕',
        }, {
          value: '双皮奶',
        }, {
          value: '蚵仔煎',
        }, {
          value: '龙须面',
        }, {
          value: '北京烤鸭',
        }],
        value: '',
       tableData: [{
            id: '1',
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
             id: '2',
            date: '2016-05-03',
            name: '王二虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
             id: '3',
            date: '2016-05-04',
            name: '王三虎',
            address: '上海市普陀区金沙江路 1520 弄'
          }, {
             id: '4',
            date: '2016-05-05',
            name: '王四虎',
            address: '上海市普陀区金沙江路 1521 弄'
          }],
         form: {
          id: '',
          date: '',
          name: '',
          address: '',
        },
        rules: {
          date: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          name: [
             { required: true, message: '姓名不能为空', trigger: 'blur' },
          ],
          address: [
             { required: true, message: '收货地址不能为空', trigger: 'blur' },
          ]
        }
    }
  },
  computed: {
      
  },
  mounted() {
      // this.tableData.forEach(item => {
      //    this.$refs.table.toggleRowSelection(item,true)
      // });
  },
  methods: {
       search() {
         console.log("搜索")
       },
       handleClick(row,scope) {
         console.log(scope)
         this.dialogFormVisible = true
         this.form.id = row.id;
         this.form.date = row.date;
         this.form.name = row.name;
         this.form.address = row.address;
       },
        deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      dialogConfirm() {
         this.$refs['dataForm'].validate((valid,object) => {
          if (valid) {
            let index = this.tableData.findIndex(item => {
              return item.id == this.form.id
            })
            this.tableData[index].date = this.form.date;
            this.tableData[index].name = this.form.name;
            this.tableData[index].address = this.form.address;
            this.dialogFormVisible = false
          } else {
            return false;
          }
        });
     
      },
      dialogReset() {
          this.$refs['dataForm'].resetFields()
      },
      handleSelectionChange(selection) {
         this.multipleSelection = selection
        //  console.log(this.multipleSelection)
      }
  },
  components: {
     
  },
}
</script>
<style lang="scss" scoped>
  .table-container {
     .el-dialog {
        .el-input,.el-select {
          width: 300px;
        }
     }
    
     .operate {
        display: flex;
        justify-content: center;
        align-items: center;
     }
     
  }
   .el-row {
     margin-bottom: 20px;
   }
</style>