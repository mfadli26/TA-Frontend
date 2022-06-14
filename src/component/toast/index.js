import React from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useToast = (props) => {
    const [visible, setVisible] = React.useState(false);
    const [toastMessage, setMessage] = React.useState("");
    const [timeToast, setTimeToast] = React.useState(1500);
    const [typeToast, setTypeToast] = React.useState(null);

    const setToast = React.useCallback(
        (message, type, time) => {
            setMessage(message);
            setVisible(true);
            setTypeToast(type)
            if (!isNaN(time)) setTimeToast(time);
        },
        [setVisible, setMessage]
    );

    const Toast = () => {
        return (
            <Snackbar open={visible}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                onClose={() => setVisible(false)}
                autoHideDuration={timeToast}
                message={toastMessage}
            >
                {typeToast && <Alert onClose={() => setVisible(false)} severity={typeToast} sx={{ width: '100%' }}>
                    {toastMessage}
                </Alert>}
            </Snackbar>
        );
    };

    return [Toast, setToast];
};

export default useToast;
