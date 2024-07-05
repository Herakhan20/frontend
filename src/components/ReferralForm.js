// src/components/ReferralForm.js
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';

const ReferralForm = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://my-backend-api.render.com/api/referral', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="referrerName"
        control={control}
        defaultValue=""
        rules={{ required: 'Referrer Name is required' }}
        render={({ field }) => (
          <TextField {...field} label="Referrer Name" fullWidth error={!!errors.referrerName} helperText={errors.referrerName ? errors.referrerName.message : ''} />
        )}
      />
      <Controller
        name="referrerEmail"
        control={control}
        defaultValue=""
        rules={{ required: 'Referrer Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } }}
        render={({ field }) => (
          <TextField {...field} label="Referrer Email" fullWidth error={!!errors.referrerEmail} helperText={errors.referrerEmail ? errors.referrerEmail.message : ''} />
        )}
      />
      <Controller
        name="refereeName"
        control={control}
        defaultValue=""
        rules={{ required: 'Referee Name is required' }}
        render={({ field }) => (
          <TextField {...field} label="Referee Name" fullWidth error={!!errors.refereeName} helperText={errors.refereeName ? errors.refereeName.message : ''} />
        )}
      />
      <Controller
        name="refereeEmail"
        control={control}
        defaultValue=""
        rules={{ required: 'Referee Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } }}
        render={({ field }) => (
          <TextField {...field} label="Referee Email" fullWidth error={!!errors.refereeEmail} helperText={errors.refereeEmail ? errors.refereeEmail.message : ''} />
        )}
      />
      <Button type="submit" variant="contained" fullWidth>
        Submit
      </Button>
    </form>
  );
};

export default ReferralForm;
