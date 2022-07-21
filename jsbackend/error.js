class MyError extends Error
{
    constructor(status = 500, message = 'Something gone wrong'){
        super()
        this.message = message
        this.status = status
    }
}
    
exports.error = MyError