<template>
  <div class="table-container">
    <div class="card-box">
    <el-row :gutter="10">
      <el-col :span="1.5">
         <el-button type="info" size="small" icon="el-icon-refresh"></el-button>
      </el-col>
       <el-col :span="1.5"> 
        <el-button type="success" size="small" icon="el-icon-plus" @click="add">添加</el-button>
      </el-col>
      <el-col :span="1.5"> 
        <el-button type="success" size="small" icon="el-icon-edit-outline" :disabled="disabled" @click="edit">编辑</el-button>
      </el-col>
      <el-col :span="1.5"> 
        <el-button type="danger" size="small" icon="el-icon-delete" :disabled="disabled" @click="del">删除</el-button>
      </el-col>
    </el-row>
     <el-table
      :data="tableData"
      ref="table"
      border
      style="width: 100%"
       @selection-change="handleSelectionChange"
       @row-dblclick="handleRowClick"
      >
       <el-table-column
           type="selection"
           width="55"
          align="center" />
       <el-table-column
        label="日期"
        width="180"
         align="center" >
          <template slot-scope="scope">
             <span>{{scope.row.date}}</span>
          </template>
       </el-table-column>
        <el-table-column
        label="姓名"
        width="180" 
         align="center" >
           <template slot-scope="scope">
             <span>{{scope.row.name}}</span>
          </template>
        </el-table-column>
      <el-table-column label="性别" width="180">
       <template slot-scope="scope">
           <span>{{scope.row.sex}}</span>
       </template>
     </el-table-column>
      <el-table-column
        label="地址"
         align="center">
          <template slot-scope="scope">
             <span>{{scope.row.address}}</span>
          </template>
       </el-table-column>
       <el-table-column
        fixed="right"
        label="操作"
        width="180"
         align="center" >
          <template slot-scope="scope">
                 <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
                  <el-button type="success" size="small"  @click="handleEditClick(scope.row)">编辑</el-button>
                  <el-button type="danger" @click.native.prevent="deleteRow(scope.$index, tableData)" size="small">
                       移除
                  </el-button>
          </template>
         </el-table-column>
     </el-table>
    </div>
     <el-dialog title="编辑" :visible.sync="dialogFormVisible"  @closed="dialogClosed">
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
        <el-form-item label="性别: " :label-width="formLabelWidth" prop="sex">
          <el-radio-group v-model="form.sex">
            <el-radio label="男" ></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
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
    // 自定义日期规则
    var validateDate = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('日期不能为空'));
        } else {
          callback();
        }
      };
     // 自定义姓名
     var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('姓名不能为空'));
        } else {
          callback();
        }
      };
      // 自定义性别
       var validateSex = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('性别必须填写'));
        } else {
          callback();
        }
      };
      // 自定义地址
      var validateAddress = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('收货地址不能为空'));
        } else {
          callback();
        }
      };
    return {
       disabled: true,           // 按钮是否禁用
       multipleSelection: [],    // 全选框选中的值
       dialogFormVisible: false, // 是否打开弹出框
       formLabelWidth: '120px', 
       operateStatus: '',       // 判断是编辑还是添加或者查看
       tableData: [{            // 初始的数据
            id: '1',
            date: '2016-05-02',
            name: '王小虎',
            sex: '男',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
             id: '2',
            date: '2016-05-03',
            name: '林琴',
            sex: '女',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
             id: '3',
            date: '2016-05-04',
            name: '林世英',
            sex: '男',
            address: '上海市普陀区金沙江路 1520 弄'
          }, {
             id: '4',
            date: '2016-05-05',
            name: '林诗颖',
            sex: '女',
            address: '上海市普陀区金沙江路 1521 弄'
          }],
         form: {             // 表单验证数据
          id: '',
          date: '',
          name: '',
          sex: '',
          address: '',
        },
        rules: {           // 自定义验证规则
          date: [
            { validator: validateDate, trigger: 'blur' }
          ],
          name: [
            { validator: validateName, trigger: 'blur' }
          ],
          sex: [
           { validator: validateSex, trigger: 'change'}
          ],
          address: [
            { validator:validateAddress , trigger: 'blur' }
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
       checkInput(value) {
          if (!value) {
              this.$message.error('不能为空');
              return value = this.fomr
          }
       },
       add() {
          this.dialogFormVisible = true;
           this.form.id = ''
           this.form.date = ''
           this.form.name = ''
           this.form.sex = ''
           this.form.address = ''
           this.operateStatus = 'add';
            this.$nextTick(() => {
              this.$refs['dataForm'].clearValidate()
            })
       },
       edit() {
         this.checkOperate()
         this.operateStatus = 'totalEdit'
         this.$nextTick(() => {
              this.$refs['dataForm'].clearValidate()
            })
       },
       del() {
          this.multipleSelection.forEach(item => {
               let index = this.tableData.indexOf(item)
               this.tableData.splice(index,1)
          });
       },
       checkOperate() {
          let len = this.multipleSelection.length;
          this.form.id = this.multipleSelection[len-1].id;
          this.form.name = this.multipleSelection[len-1].name;
          this.form.date = this.multipleSelection[len-1].date;
          this.form.sex = this.multipleSelection[len-1].sex;
          this.form.address = this.multipleSelection[len-1].address;
         this.dialogFormVisible = true
         if (len > 0) this.multipleSelection.splice(len-1,1) 
       },
       // Dialog 关闭动画结束时的回调
       dialogClosed() {
          if (this.operateStatus == "totalEdit") {
              if (this.multipleSelection.length > 0) {
                  this.dialogFormVisible = true;
                  this.$nextTick(() => {
                      this.$refs['dataForm'].clearValidate()
                  })
                  let len = this.multipleSelection.length;
                  this.form.id = this.multipleSelection[len-1].id;
                  this.form.name = this.multipleSelection[len-1].name;
                  this.form.date = this.multipleSelection[len-1].date;
                  this.form.sex = this.multipleSelection[len-1].sex;
                  this.form.address = this.multipleSelection[len-1].address;
                  this.multipleSelection.splice(len-1,1);
              }
          }
       },
       handleEditClick(row) {
          this.operateStatus = 'edit'
          this.openDialog(row)
          this.$nextTick(() => {
            this.$refs['dataForm'].clearValidate()
          })
       },
        deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      // 弹出框点击确定按钮
      dialogConfirm() {
         if (this.operateStatus == 'see') {
            this.dialogFormVisible = false
         }else{
             this.$refs['dataForm'].validate((valid,object) => {
                if (valid) {
                  if (this.operateStatus == 'edit' || this.operateStatus == 'totalEdit') {
                      let index = this.tableData.findIndex(item => {
                        return item.id == this.form.id
                      })
                      this.tableData[index].date = this.form.date;
                      this.tableData[index].name = this.form.name;
                      this.tableData[index].sex = this.form.sex;
                      this.tableData[index].address = this.form.address;
                      this.dialogFormVisible = false
                  }else if(this.operateStatus == 'add') {
                      let json = {};
                      json.date = this.form.date;
                      json.name = this.form.name;
                      json.sex = this.form.sex;
                      json.address = this.form.address;
                      this.tableData.push(json)
                        this.dialogFormVisible = false
                  }
                
                } else {
                  return false;
                }
              });
         }
      },
      dialogReset() {
          this.$refs['dataForm'].resetFields()
      },
      // 当某一行被双击时会触发该事件
      handleRowClick(row) {
         this.operateStatus = 'edit'
         this.openDialog(row)
         this.$nextTick(() => {
            this.$refs['dataForm'].clearValidate()
          })
      },
      // 当选择项发生变化时会触发该事件
      handleSelectionChange(selection) {
         this.multipleSelection = selection
         if (selection.length > 0) this.disabled = false
         else this.disabled = true
      },
      openDialog(row) {
         this.dialogFormVisible = true
         this.form.id = row.id;
         this.form.date = row.date;
         this.form.name = row.name;
         this.form.sex = row.sex;
         this.form.address = row.address;
      }
  },
  components: {
     
  }
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