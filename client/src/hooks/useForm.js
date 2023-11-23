import { useState, useEffect } from "react"

export default function useForm(submitHandler, initialValues) {
    const [formValues, setValues] = useState(initialValues);

    // useEffect(() => {
    //     setValues(initialValues);
    // }, [initialValues])

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        submitHandler(formValues);
    };

    return {
        formValues,
        onChange,
        onSubmit,
    }
}