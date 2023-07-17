import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

/**
 * Create the access token
 * @param {object} payload - The content to generate the access token
 * @returns {Promise} The access token
 */
export function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      JWT_SECRET,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}

/**
 * Validate the access token
 * @param {string} token - The access token
 * @returns {Promise} The access token payload
 */
export function validateAccessToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (err, payload) => {
      if (err) reject(err);
      resolve(payload);
    });
  });
}
