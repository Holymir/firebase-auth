<template>
    <div>
        Logged in
        <span v-if="loggedIn">Yes</span>
        <span v-else>No</span>
        <div>
            <button @click="signOut">Sign out</button>
        </div>
    </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
    methods: {
        async signOut() {
            try {
                const data = firebase.default.auth().signOut();
                console.log(data);
                this.$router.replace({name: "Login"});
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
        firebase.default.auth().onAuthStateChanged((user) => {
            this.loggedIn = !!user;
        });
    },
    data() {
        return {
            loggedIn: false,
        };
    },
};
</script>

<style lang="scss" scoped></style>
