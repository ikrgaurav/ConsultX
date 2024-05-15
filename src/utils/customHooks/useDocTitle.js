import { useEffect } from "react";

const useDocTitle = (title) => {

    useEffect(() => {
        document.title = `${title} - ConsultX`;
    }, [title]);

    return null;

};

export default useDocTitle;
