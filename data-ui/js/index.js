new Vue({
    el:'#app',
    data(){
        return {
            info:{
                name:'',
                sex:'',
                phonenumber:'',
                date:'',
                birthday:''
            },
            tableData: [{
                name: '王小虎',
                sex: '男',
                phonenumber:'1234567890',
                birthday:'2020-2-2'
              }]
        }
    },
    methods:{
        addUser(){

            if(!this.info.name){
                this.$message({
                    message: '警告!,请输入姓名',
                    type: 'warning'
                  });
                return;
            }
            if(!this.info.sex){
                this.$message({
                    message: '警告!,请输入性别',
                    type: 'warning'
                  });
                return;
            }
            if(!this.info.birthday){
                this.$message({
                    message: '警告!,请输入生日',
                    type: 'warning'
                  });
                return;
            }
            if(!/^1[3456789]\d{9}$/.test(this.info.phonenumber)){
                this.$message({
                    message: '警告!,请输入电话号码',
                    type: 'warning'
                  });
                return;
            }
            this.tableData.push(this.info)
            this.info = {
                name:'',
                sex:'',
                phonenumber:'',
                date:'',
                birthday:''
            }
        },
        deUser(idx){
        //    console.log(idx);
            this.$confirm('确认关闭？')
              .then(_ => {
                this.tableData.splice(idx,1)
              })
              .catch(_ => {});
          }
        },
        ditUser(row,idx){
           console.log(row,idx);
        }

})