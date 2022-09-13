<template>
    <div>

    </div>
</template>

<script>
    export default{
        name:"LifeCycle",
        beforeCreate(){
            console.log("before create")
        },
        created(){
            console.log("created")
        },
        beforeMount(){
            console.log("before Mount")
        },
        mounted(){
            console.log("mounted")
        },
        afterCreate(){
            console.log("after create")
        }
    }
</script>