import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  position: relative;

  header {
    height: 144px;
    background: #28262e;

    display: flex;
    align-items: center;

    svg {
      margin-left: 200px;
      width: 24px;
      height: 24px;
      color: #999591;
      cursor: pointer;
    }
  }
`;

export const AvatarInput = styled.div`
  margin-bottom: -50px;
  position: relative;
  top: -100px;
  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    right: 79px;
    bottom: 4px;
    cursor: pointer;

    background: #ff9000;
    border-radius: 50%;
    border: 0;

    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }

    input {
      display: none;
    }
    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }
  }
`;

export const Content = styled.div`
  /* top: 53px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -176 auto 0;

  width: 100%;

  form {
    position: relative;
    top: -50px;
    margin: 60px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 20px;
      text-align: left;
      margin-bottom: 24px;
    }
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;
