import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { Switch, FormControlLabel } from '@mui/material';

// ----------------------------------------------------------------------

RHFSwitch.propTypes = {
  name: PropTypes.string,
};

export default function RHFSwitch({ name, sx, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <FormControlLabel control={<Switch {...field} sx={sx} checked={field.value} />} {...other} />}
    />
  );
}
