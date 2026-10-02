
import jwt, {type JwtPayload}from 'jsonwebtoken';
import type { NextFunction,Response,Request } from 'express';
import { User, type Iuser } from './model.js'

export interface AuthenticatedRequest extends Request {
    user?: Iuser | null;
}
const isAuth =async(req:AuthenticatedRequest,res :Response,next:NextFunction):Promise<void> =>{
    try {
        const token =req.headers.token as string
            if (!token){
             res.status(403).json({message:'لطفا ابتدا وارد سایت  شویدد '})
                return
        }
        const JWT_SEC=process.env.JWT_SEC as string
         const decodeValue =jwt.verify(token ,JWT_SEC)as JwtPayload
             if (!decodeValue||!decodeValue._id){
                res.status(403).json({message:'توکن نامعتبر است '})
                     return
        }
        const userId =decodeValue._id

        const user = await User.findById(userId).select('-password')
            if (!user){
                res.status(400).json({ message: 'کاربری یافت نشد' })
            return
        }
        req.user = user;
        next();



} catch (error) {
    res.status(403).json({message:'لطفا ابتدا وارد سایت شوید'})

}




}
export default isAuth




