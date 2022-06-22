module.exports = {
    put:{
        tags:['User CRUD operations'],
         description: "Follow User",
        operationId: "updateUnFollowUser",
        parameters:[
            {
                name:"id",
                in:"path",
               /*  schema:{
                    $ref:"#/components/schemas/id"
                }, */
                required:true,
                description: "Id of user to be followed"
            }
        ],
        responses:{

            '200':{
                description: "User has been unfollowed"
            },
            '403':{
                description: "You dont follow this user"
            },
            '500':{
                description: "Server error"
            }
            
        }
    }
}