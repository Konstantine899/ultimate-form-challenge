// Step3.js
import { Typography } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';

import { MainContainer } from './components/MainContainer';
import { Form } from './components/Form';
import { FileInput } from './components/FileInput';
import { PrimaryButton } from './components/PrimaryButton';
import { useHistory } from 'react-router';

export const Step3 = () => {
  const history = useHistory();
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    history.push('./result');
  };
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step3
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
