import PropTypes from "prop-types";
// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { MuiOtpInput } from 'mui-one-time-password-input';
import { Box, FormHelperText } from "@mui/material";

// ----------------------------------------------------------------------

RHFMuiOtpInput.propTypes = {
    name: PropTypes.string,
};

export default function RHFMuiOtpInput({ name, ...other }) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error, invalid } }) => (
                <Box>
                    <MuiOtpInput
                        {...field}
                        value={
                            typeof field.value === "number" && field.value === 0
                                ? ""
                                : field.value
                        }
                        placeholder="-"
                        {...other}
                    />
                    {invalid ? (
                        <FormHelperText error>{error?.message}</FormHelperText>
                    ) : null}
                </Box>
            )}
        />
    );
}