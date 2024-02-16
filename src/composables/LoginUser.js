import { ref } from "vue";
import axios from "axios";

const LoginUser = () => {
  const user = ref(null);
  const error = ref(null);

  const login = async (email, password) => {
    try {
      const url = "http://localhost:8080/login";
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const data = {
        email: email.value,
        password: password.value,
      };
      await axios.post(url, data, config, {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err.response.data.error);
      error.value = err.response.data.error;
    }
  };
  return { login, user, error };
};

export default LoginUser;
