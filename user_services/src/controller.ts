import type { Request, Response } from "express";
import TryCatch from "./TryCatch.js";
import { User } from "./model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import type { AuthenticatedRequest } from "./middleware.js";

export const registerUser = TryCatch(async (req, res) => {
    const { name, email, password } = req.body

    const user = await User.findOne({ email })

    if (user) {
        res.status(400).json({ message: 'کاربری با این مشخصات قبلا ثبت نام کرده است' })
        return
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const createUser = await User.create({
        name,
        email,
        password: hashPassword
    })

    const JWT_SEC = process.env.JWT_SEC as string
    const token = jwt.sign({ _id: createUser._id }, JWT_SEC, {
        expiresIn: '7d'
    })

    res.status(201).json({
        message: 'ثبت نام با موفقیت انجام شد',
        user: {
            id: createUser._id,
            name: createUser.name,
            email: createUser.email,
            role: createUser.role
        },
        token
    })

})

export const loginUser = TryCatch(async (req, res) => {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        res.status(404).json({ message: 'اطلاعات ورود صحیح نمی باشد' })
        return
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        res.status(404).json({ message: 'اطلاعات ورود صحیح نمی باشد' })
        return
    }

    res.status(200).json({
        message: 'با موفقیت وارد شدید',
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        }
    })


})

export const myProfile = TryCatch(async (req:AuthenticatedRequest, res) => {
    const user = req.user

    res.json(user)
})