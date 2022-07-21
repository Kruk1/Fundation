class MyError extends Error
{
    constructor(status = 500, message = 'Something wrongs'){
        super()
        this.message = message
        this.status = status
    }
}
    
exports.error = MyError