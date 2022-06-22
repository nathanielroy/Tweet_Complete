module.exports = {
    get:{
        tags:['User CRUD operations'],
        description: "Get a User",
        operationId: "getUser",
        parameters:[
            {
                name:"id",
                in:"path",
                required:true,
                description: "User ID"
            }
        ],
        responses:{
            '200':{
                description:"User is obtained",
                content:{
                    'application/json':{
                       /*  schema:{
                            $ref:"#/components/schemas/Todo"
                        } */
                    }
                }
            },
            '404':{
                description: "User is not found",
                content:{
                    'application/json':{
                        schema:{
                            //$ref:'#/components/schemas/Error',
                            example:{
                                message:"We can't find the user",
                                internal_code:"Invalid id"
                            }
                        }
                    }
                }
            }
        }
    }
}