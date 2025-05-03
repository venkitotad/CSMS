import { createUser, findUserByEmail } from "../models/user.model.js";
import '../utils/validators.js'
import { isPasswordStrong, isValidEmail, isValidName } from "../utils/validators.js";
import bcrypt, { hash } from "bcrypt";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();

const JWT_SECERT = process.env.JWT_SECERT;

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All feilds are required!." });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Invlaid email' });
    }

    if (!isValidName(name)) {
      return res.status(400).json({ message: ' Invlaid name' });
    }

    if (!isPasswordStrong(password)) {
      return res.status(400).json({ message: 'password must be 8 charecters long' });
    }

    const existingUser = await findUserByEmail(email);

    if (existingUser) {
      return res.status(401).json({ message: 'user already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    const user = await createUser(name, email, password_hash);
    // const token = jwt.sign({ userId: user.id }, JWT_SECERT, { expiresIn: "1h" });

    res.status(201).json({
      message: 'user created successfully!..',
      user
    })


  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'sever error' })

  }
};

export const login = async (req, res) => {

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'All feilds are required' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Invalid email' });
    }

    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(409).json({ message: 'user not found try signup' })
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credntials' })
    }


    const token = jwt.sign({ userId: user.id }, JWT_SECERT, { expiresIn: "1d" });

    res.status(200).json({
      message: 'logged In successful',
      user
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'server error'
    })

  }



}


export const logout = async (req, res) => {

  try {
    return res.status(200).json({ message: 'Logged out successfully.' });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'something went wrong'
    })

  }

}
