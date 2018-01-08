var router = new VueRouter({
    LinkActiveClass:"active",
    routes:[
        {
            path:"/",
            component: Main,
            children:[
                {
                    path:"",
                    components:{
                        left:Left,
                        right:Right,
                    }
                }
            ]

        },
        {
            path:"/quick",
            component: Quick,
        }
    ]

})