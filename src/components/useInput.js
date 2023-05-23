import { useState } from "react";

//complete the input hook
const useInput = () => {
    const [value, setValue] = useState("");
    const onInputChange= (e)=>{
        setValue(e.target.value)
    }
    const bind ={
        value: value,
        onChange: onInputChange,
    }

    return bind;
};

export default useInput;
