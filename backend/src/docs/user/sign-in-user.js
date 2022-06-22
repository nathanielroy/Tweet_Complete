
module.exports = {
    post:{
        tags:['User CRUD operations'],
        description: "Sign In new User",
        operationId: "signIn",
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
            '400':{
                description: "User not found."
            },
            '401':{
                description: "Invalid Password!"
            },
            '500':{
                description: 'Server error'
            }
        }
    }
}