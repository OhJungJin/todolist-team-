import { useState, useCallback } from "react";

function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm);
    // change
    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }, []);
    // reset
    const reset = useCallback(() => setForm(initialForm), [initialForm]);

    return [form, onChange, reset, setForm];
}
export default useInputs;
