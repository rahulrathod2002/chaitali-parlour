import React, { createContext, useContext, useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    Snackbar,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
    const [ dialog, setDialog ] = useState({ open: false, title: '', message: '', actions: null });
    const [ snackbar, setSnackbar ] = useState({ open: false, message: '', severity: 'info' });

    const showDialog = (title, message, actions = null) => {
        setDialog({ open: true, title, message, actions });
    };

    const hideDialog = () => {
        setDialog({ open: false, title: '', message: '', actions: null });
    };

    const showSnackbar = (message, severity = 'info') => {
        setSnackbar({ open: true, message, severity });
    };

    const hideSnackbar = () => {
        setSnackbar({ open: false, message: '', severity: 'info' });
    };

    return (
        <AppContext.Provider value={ { showDialog, hideDialog, showSnackbar, hideSnackbar } }>
            { children }
            <Dialog open={ dialog.open } onClose={ hideDialog }>
                <DialogTitle>{ dialog.title }</DialogTitle>
                <DialogContent>
                    <DialogContentText>{ dialog.message }</DialogContentText>
                </DialogContent>
                { dialog.actions ? (
                    <DialogActions>{ dialog.actions }</DialogActions>
                ) : (
                    <DialogActions>
                        <Button onClick={ hideDialog } color="primary">
                            Close
                        </Button>
                    </DialogActions>
                ) }
            </Dialog>
            <Snackbar
                open={ snackbar.open }
                autoHideDuration={ 6000 }
                onClose={ hideSnackbar }
                anchorOrigin={ { vertical: 'bottom', horizontal: 'left' } }
            >
                <MuiAlert onClose={ hideSnackbar } severity={ snackbar.severity } sx={ { width: '100%' } }>
                    { snackbar.message }
                </MuiAlert>
            </Snackbar>
        </AppContext.Provider>
    );
};
