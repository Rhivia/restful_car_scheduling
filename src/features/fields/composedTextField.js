import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

export default function ComposedTextField() {
  const [value, setValue] = useState();

  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="component-outlined">Name</InputLabel>
      <OutlinedInput id="component-outlined" value={value} onChange={e => setValue(e.target.value)} label="Name" />
    </FormControl>
  );
}
