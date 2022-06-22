module.exports = {
    put:{
        tags:['User CRUD operations'],
        description: "Update User",
        operationId: "updateUser",
        parameters:[
            {
                name:"id",
                in:"path",
                /* schema:{
                    $ref:"#/components/schemas/id"
                }, */
                required:true,
                description: "Id of user to be updated"
            }
        ],
        responses:{

            '200':{
                description: "Account has been updated"
            },
            '403':{
                description: "You can update only your account!"
            },
            '500':{
                description: "Server error"
            }
            
        }
    }
}