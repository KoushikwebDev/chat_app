import React from "react";
import { SnackbarProvider } from "notistack";

function ToastProvider({ children }) {
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={2000}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      preventDuplicate
    >
      {children}
    </SnackbarProvider>
  );
}

export default ToastProvider;
