    new Vue({
        el:'#app',
        data:{
            message:'Hello Vue.js!',
            uid : 10,
            flag:false
        },
        methods:{
            clickBtn(){
                console.log("hi");
            },
            // clickBtn:function(){
            //     console.log("hi")
            // }
            clickBtn2(){
                alert("히히");
            }
        }
        
    })
