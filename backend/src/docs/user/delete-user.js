module.exports = {
    delete:{
        tags: ['User CRUD operations'],
        description: "Deleting a User",
        operationId: "deleteUser",
        parameters:[
            {
                name:"id",
                in:"path",
                /* schema:{
                    $ref:"#/components/schemas/id"
                }, */
                required:true,
                description: "Requested ID"
            },
            {
                name:"userId",
                in:"path",
                /* schema:{
                    $ref:"#/components/schemas/id"
                }, */
                required:true,
                description: "User ID Match with Requested ID"
            }
        ],
        responses:{
            '200':{
                description:"Account has been deleted"
            },
            '403':{
                description:"You can delete only your account!"
            },
            '500':{
                description:"Server error"
            }
        }
    }
}