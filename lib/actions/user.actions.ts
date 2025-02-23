"use server";

import { ID } from "appwrite";
import { account } from "../appwrite.config";

export const createUser = async (userEmail: string) => {
  try {
    const userSessionToken = await account.createEmailToken(
      ID.unique(),
      userEmail
    );
    return userSessionToken;
  } catch (error) {
    console.log("error", error);
  }
};

export const loginUser = async (userId: string, password: string) => {
  try {
    const userSessionToken = await account.createSession(
      JSON.parse(JSON.stringify(userId)),
      JSON.parse(JSON.stringify(password))
    );
    return userSessionToken;
  } catch (error) {
    console.log("error", JSON.parse(JSON.stringify(error)));
  }
};
