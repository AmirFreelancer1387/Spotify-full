import type { Request, Response } from "express";
import TryCatch from "./TryCatch.js";
import { User } from "./model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const registerUser = TryCatch(async (req, res) => {
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

    res.status(201).json({
        message: 'ثبت نام با موفقیت انجام شد',
        user: {
            id: createUser._id,
            name: createUser.name,
            email: createUser.email,
            role: createUser.role
        }
    })

})

export default registerUser