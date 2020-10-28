<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="pressed">
            <div class="login">
                <input type="email" v-model="email" placeholder="email">
            </div>
            <div class="password">
                <input type="password" v-model="password" placeholder="password">
            </div>
            <button type="submit">Login</button>
        </form>
        <div class="error" v-if="error">{{error.mesage}}</div>
        <span>Need an account? Click here to <router-link to="/register">register</router-link></span>
    </div>
</template>

<script>
    import * as firebase from "firebase/app";
    import "firebase/auth";
    export default {
        methods: {
            async pressed() {
                try {
                    const userData = await firebase.default.auth().signInWithEmailAndPassword(this.email, this.password);
                    console.log(userData);
                    this.$router.replace({name: "Secret"});
                } catch (error) {
                    console.log("Error", error);
                }
            }
        },
        data(){
            return {
                email: "",
                password: "",
                error: "",
            }
            
        }
    }
</script>

<style lang="scss" scoped>
    .error {
    color: red;
    font-size: 18px;
    }
    input {
    width: 400px;
    padding: 30px;
    margin: 20px;
    font-size: 21px;
    }
    button {
    width: 400px;
    height: 75px;
    font-size: 100%;
    }
</style>