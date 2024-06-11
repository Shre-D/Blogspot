import { Request, Response } from "express";
import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

async function hashPassword(plaintextPassword: string) {
  const hash = await bcrypt.hash(plaintextPassword, 10);
  return hash;
}

async function comparePassword(plaintextPassword: string, hash: string) {
  const result = await bcrypt.compare(plaintextPassword, hash);
  return result;
}

export async function Register(req: Request, res: Response) {
  try {
    const user = req.body;
    const { name, email, password } = user;
    const isEmailAllReadyExist = await User.findOne({
      email: email,
    });

    if (isEmailAllReadyExist) {
      res.status(400).json({
        status: 400,
        message: "Email all ready in use",
      });
      return;
    }

    const hashedPassword = hashPassword(password);
    const newUser = await User.create({
      name,
      email,
      hashedPassword,
    });
    // Send the newUser as response;
    res.status(200).json({
      status: 201,
      success: true,
      message: " User created Successfully",
      user: newUser,
    });
  } catch (error: any) {
    // console the error to debug
    console.log(error);
    // Send the error message to the client
    res.status(400).json({
      status: 400,
      message: error.message.toString(),
    });
  }
}

export async function Login(req: Request, res: Response) {
  try {
    // ** Get The User Data From Body ;
    const user = req.body;
    // ** destructure the information from user;
    const { email, password } = user;
    // ** Check the (email/user) exist in database or not ;
    const isUserExist = await User.findOne({
      email: email,
    });
    // ** if there is not any user we will send user not found;
    if (!isUserExist) {
      res.status(404).json({
        status: 404,
        success: false,
        message: "User not found",
      });
      return;
    }
    // ** if the (user) exist in database we will check the password is valid or not ;
    // ** compare the password in db and the password sended in the request body
    const isPasswordMatched = comparePassword(password, isUserExist.password);
    // ** if not matched send response that wrong password;
    if (!isPasswordMatched) {
      res.status(400).json({
        status: 400,
        success: false,
        message: "wrong password",
      });
      return;
    }

    const token = jwt.sign(
      { _id: isUserExist?._id, email: isUserExist?.email },
      "YOUR_SECRET",
      {
        expiresIn: "1d",
      }
    );

    res.cookie('jwtToken', token , { httpOnly: true, secure: true });

    res.status(200).json({
      status: 200,
      success: true,
      message: "login success",
      token: token,
    });
  } catch (error: any) {
    res.status(400).json({
      status: 400,
      message: error.message.toString(),
    });
  }
}