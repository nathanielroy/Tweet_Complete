module.exports = {
    get:{
        tags:['User CRUD operations'],
        description: "Get User's Friends",
        operationId: "getUserFriends",
        parameters:[
            {
                name:"id",
                in:"path",
                /* schema:{
                    $ref:"#/components/schemas/id"
                }, */
                required:true,
                description: "User's ID"
            }
        ],
        responses:{
            '200':{
                description: "Success",
                content:{
                    'application/json': {
                        /* schema:{
                            $ref:"#/components/schemas/Todo"
                        } */
                    }
                }
            },
            '500':{
                description: "Server error",
                content:{
                    'application/json':{
                      
                    }
                }
            }
        }
    }
}