import jwt from 'jsonwebtoken';

const isAuthenticated = () => {
  const token = localStorage.getItem("token");

  if (token) {
    const decoded = jwt.decode(token);

    if (decoded) {
      const decodedArray = decoded.split("=")

      if (decodedArray[0] === "username") return true;
    }
  }

  return false;
}

export default isAuthenticated;