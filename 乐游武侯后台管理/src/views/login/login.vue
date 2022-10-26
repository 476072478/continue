<template>
  <div class="LoginStyle">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="myparticles"
    ></vue-particles>
    <div class="LoginConter">
      <div class="Logintext">新闻发布系统</div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="60px"
        class="demo-ruleForm"
      >
        <el-form-item label="账户" prop="name">
          <el-input
            type="text"
            v-model="ruleForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <div class="mybutton">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
import { adminLogin } from "../../request/apihandle";
export default {
  data() {
    let validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账户"));
      } else {
        callback();
      }
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        pass: "",
      },
      rules: {
        name: [{ validator: validateName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  mounted() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          adminLogin(this.ruleForm).then((res) => {
            if (res.status === 200) {
              this.$store.dispatch("setadmininfo", res.data);
              this.$router.push("/home");
            }
          });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style scoped>
.LoginStyle {
  background: rgb(35, 39, 65);
  height: 100vh;
  width: 100vw;
}

.LoginConter {
  width: 500px;
  height: 300px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: black;
  padding: 20px;
}

.Logintext {
  text-align: center;
  color: white;
  font-size: 30px;
  height: 60px;
  line-height: 60px;
  margin-bottom: 8px;
}
.demo-ruleForm {
  width: 100%;
}
.myparticles {
  position: fixed;
  width: 100%;
  height: 100%;
  background-size: cover;
}
.mybutton {
  text-align: center;
}
.mybutton button {
  width: 120px;
}
</style>