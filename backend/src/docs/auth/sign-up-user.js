
module.exports = {
    post:{
        tags:['User CRUD operations'],
        description: "Sign Up new User",
        operationId: "signUp",
        parameters:[],
        requestBody: {
            content:{
                'application/json': {
                    /* schema:{
                        $ref:'#/components/schemas/TodoInput'
                    } */
                }
            }
        },
        responses:{
            '200':{
                description: "User was registered successfully!"
            },
            '500':{
                description: 'Server error'
            }
        }
    }
}