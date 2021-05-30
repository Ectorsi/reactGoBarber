import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';

import SignUp from '../../pages/SignUp';
import api from '../../services/api';

const mockedHistoryPush = jest.fn();
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mockedRequestApi = jest.fn();
const mockedAddToast = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
      push: jest.fn(),
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('../../services/api', () => {
  return {
    api: () => ({
      post: mockedRequestApi,
    }),
  };
});

jest.mock('../../hooks/toast', () => {
  return {
    useToast: () => ({
      addToast: mockedAddToast,
    }),
  };
});

describe('SignUp page', () => {
  it('shoud be able create the credentials', async () => {
    const { getByPlaceholderText, getByText } = render(<SignUp />);

    const nameField = getByPlaceholderText('Nome');
    const emailField = getByPlaceholderText('E-mail');
    const passwordField = getByPlaceholderText('Senha');

    const buttonElement = getByText('Cadastrar');

    fireEvent.change(nameField, { target: { value: 'José Ector' } });
    fireEvent.change(emailField, { target: { value: 'ector@gmail.com' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedRequestApi).not.toHaveBeenCalledWith('/');
    });
  });

  it('shoud not be able create the credentials whith email validation', async () => {
    const { getByPlaceholderText, getByText } = render(<SignUp />);

    const nameField = getByPlaceholderText('Nome');
    const emailField = getByPlaceholderText('E-mail');
    const passwordField = getByPlaceholderText('Senha');

    const buttonElement = getByText('Cadastrar');

    fireEvent.change(nameField, { target: { value: 'José Ector' } });
    fireEvent.change(emailField, {
      target: { value: 'not-valid-credentials' },
    });
    fireEvent.change(passwordField, { target: { value: '123456' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalledWith('/');
    });
  });

  it('shoud display an error id signUp fails', async () => {
    mockedRequestApi.mockImplementation(() => {
      throw new Error();
    });

    const { getByPlaceholderText, getByText } = render(<SignUp />);

    const nameField = getByPlaceholderText('Nome');
    const emailField = getByPlaceholderText('E-mail');
    const passwordField = getByPlaceholderText('Senha');

    const buttonElement = getByText('Cadastrar');

    fireEvent.change(nameField, { target: { value: 'José Ector' } });
    fireEvent.change(emailField, {
      target: { value: 'ector@gmail.com' },
    });
    fireEvent.change(passwordField, { target: { value: '123456' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalledWith('/');
    });
  });
});
