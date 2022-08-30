import React from "react";

const useAxios = () => {
    const [state, setState] = React.useState({
        data: null,
        error: null,
        loading: false,
    });

    const loadData = async (axios) => {
        setState({ data: null, error: null, loading: true });
        try {
            const responseData = await axios;
            if (responseData) {
                setState({
                    data: responseData.data,
                    error: null,
                    loading: false,
                });
                return responseData;
            }
        } catch (error) {
            setState((prevState) => ({ ...prevState, error, loading: false }));
            throw error;
        }
        return null;
    };

    const clear = () => {
        setState({ data: null, error: null, loading: false });
    };

    return { ...state, loadData, clear };
};

export default useAxios;
