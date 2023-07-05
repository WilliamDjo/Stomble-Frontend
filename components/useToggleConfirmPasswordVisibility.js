import React from "react";

export const useToggleConfirmPasswordVisibility = () => {
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    React.useState(true);
  const [rightIcon2, setRightIcon] = React.useState("eye");

  const handleConfirmPasswordVisibility = () => {
    if (rightIcon2 === "eye") {
      setRightIcon("eye-off");
      setConfirmPasswordVisibility(!confirmPasswordVisibility);
    } else if (rightIcon2 === "eye-off") {
      setRightIcon("eye");
      setConfirmPasswordVisibility(!confirmPasswordVisibility);
    }
  };
  return {
    confirmPasswordVisibility,
    rightIcon2,
    handleConfirmPasswordVisibility,
  };
};
