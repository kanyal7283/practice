class AuthController {
     async signUp(req, res) {
        try {

        const {name,age,address,gender} = req.body;

        return res.status(200).send(
            {
                code : 201,
                success: true,
                message:"Sign up successfully......",
                result:req.body
            }
        );
            
        } catch (error) {
            // Log the error and send an appropriate response based on the error message
            console.log(error);
             return res.status(500).send(
            {
                code : 500,
                success: false,
                message:"Something went wrog"
            }
        );
        }
    }
}


module.exports.AuthController = new AuthController();