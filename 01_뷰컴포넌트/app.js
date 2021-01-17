var app = new Vue({
    el : '#app',
    data : {
        message : 'This is 부모 Component'
    },
    components : {                                             
        'todo-list' : cmp
    }
})