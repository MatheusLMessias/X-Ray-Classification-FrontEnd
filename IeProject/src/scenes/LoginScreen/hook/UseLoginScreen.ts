import { useState } from "react";

const UseLoginScreen = () => {

    const [email, setEmail] = useState<String>("");
    const [newPassword, setNewPassword] = useState<String>("");

    return{
        email,
        newPassword,
        setEmail,
        setNewPassword
    }
}

export default UseLoginScreen;