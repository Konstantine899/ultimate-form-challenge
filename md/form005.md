# Идем дальше

теперь добавлю checkbox который будет активировать input телефонного номера.
После input email я добавляю еще один компонент FormControlLabel это специальный компонент что бы работать со всякими checkbox контролами в material-ui.

```jsx
//Step2.js
import React from 'react';
import { FormControlLabel, Typography } from '@material-ui/core';
import { MainContainer } from './components/MainContainer';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';

import { Form } from './components/Form';
import { Input } from './components/Input';
import { PrimaryButton } from './components/PrimaryButton';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email should have  correct format')
    .required('Email is a required field'),
});

export const Step2 = () => {
  const history = useHistory();

  const { register, handleSubmit, errors, watch } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    history.push('/step3');
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="email"
          type="email"
          label="Email"
          name="email"
          required
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <FormControlLabel />

        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
```

В атрибутах FormControlLabel указываю label="Do you have a phone". И указываю сам control т.е. то чем этот компонент будет управлять control={\<Checkbox />}

```jsx
//Step2.js
import React from 'react';
import { Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import { MainContainer } from './components/MainContainer';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';

import { Form } from './components/Form';
import { Input } from './components/Input';
import { PrimaryButton } from './components/PrimaryButton';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email should have  correct format')
    .required('Email is a required field'),
});

export const Step2 = () => {
  const history = useHistory();

  const { register, handleSubmit, errors, watch } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    history.push('/step3');
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="email"
          type="email"
          label="Email"
          name="email"
          required
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <FormControlLabel control={<Checkbox />} label="Do you have a phone" />

        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
```

И теперь в самом Checkbox указываю name="hasPhone", inputRef={} что бы им могла управлять наша react-hook-form. В inputRef={} указываю register и указываю цвет color="primary".

```jsx
//Step2.js
import React from 'react';
import { Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import { MainContainer } from './components/MainContainer';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';

import { Form } from './components/Form';
import { Input } from './components/Input';
import { PrimaryButton } from './components/PrimaryButton';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email should have  correct format')
    .required('Email is a required field'),
});

export const Step2 = () => {
  const history = useHistory();

  const { register, handleSubmit, errors, watch } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    history.push('/step3');
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="email"
          type="email"
          label="Email"
          name="email"
          required
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <FormControlLabel
          control={
            <Checkbox name="hasPhone" inputRef={register} color="primary" />
          }
          label="Do you have a phone"
        />

        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
```

Теперь мы сможем следить за значением этого поля в форме в реальном времени когда оно будет обновляться.

Где-нибудь вверху документа добавляю специальную костанту которая будет следить за полем const hasPhone = , а следить оа будет при помощи метода watch который я упоменал ранее. Она будет автоматически обновлять значение константы const hasPhone = watch('hasPhone');

```jsx
//Step2.js
import React from 'react';
import { Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import { MainContainer } from './components/MainContainer';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';

import { Form } from './components/Form';
import { Input } from './components/Input';
import { PrimaryButton } from './components/PrimaryButton';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email should have  correct format')
    .required('Email is a required field'),
});

export const Step2 = () => {
  const history = useHistory();

  const { register, handleSubmit, errors, watch } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const hasPhone = watch('hasPhone');

  const onSubmit = (data) => {
    history.push('/step3');
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="email"
          type="email"
          label="Email"
          name="email"
          required
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <FormControlLabel
          control={
            <Checkbox name="hasPhone" inputRef={register} color="primary" />
          }
          label="Do you have a phone"
        />

        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
```

Теперь внутри нашего layout после Checkbox мы можем добавить специальный блок {} который будет рендериться т.е. если hasPhone тогда &&(\<Input />) т.е. с определенными полями id и т.д. Для телефонного номера в html есть специальный input с type="tel" который я так же указываю.

```jsx
//Step2.js
import React from 'react';
import { Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import { MainContainer } from './components/MainContainer';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';

import { Form } from './components/Form';
import { Input } from './components/Input';
import { PrimaryButton } from './components/PrimaryButton';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email should have  correct format')
    .required('Email is a required field'),
});

export const Step2 = () => {
  const history = useHistory();

  const { register, handleSubmit, errors, watch } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const hasPhone = watch('hasPhone');

  const onSubmit = (data) => {
    history.push('/step3');
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="email"
          type="email"
          label="Email"
          name="email"
          required
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <FormControlLabel
          control={
            <Checkbox name="hasPhone" inputRef={register} color="primary" />
          }
          label="Do you have a phone"
        />
        {hasPhone && (
          <Input
            ref={register}
            id="phoneNumber"
            type="tel"
            label="Phone number"
            name="phoneNumber"
          />
        )}

        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
```

![](img/013.png)

![](img/014.png)

Закончил на 35:40
