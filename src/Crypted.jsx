import CryptoJS from "crypto-js";

export function encryptedToken(token) {
  const encryptedToken = CryptoJS.AES.encrypt(
    token,
    import.meta.env.VITE_ACCESS_KEY
  ).toString();

  localStorage.adminToken = encryptedToken;

  return encryptedToken;
}

export function decryptedToken(token) {
  const decryptedBytes = CryptoJS.AES.decrypt(
    token,
    import.meta.env.VITE_ACCESS_KEY
  );
  const decryptedToken = decryptedBytes.toString(CryptoJS.enc.Utf8);

  return decryptedToken;
}
