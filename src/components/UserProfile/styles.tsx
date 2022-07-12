import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 386px;

  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  overflow: hidden;
`

export const Divider = styled.div`
  border-bottom: 1px solid #ddd;
  margin: 30px 0;
  width: 100%;
`

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  svg {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  h2 {
    font-size: 16px;
    font-weight: 700;
    color: #16325c;
  }

  p {
    font-size: 12px;
    font-weight: 600;
    color: #8a94a6;
  }
`

export const Score = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;

    p {
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 1px;
      color: #16325c;
    }

    span {
      font-size: 12px;
      color: #8a94a6;
    }
  }
`

export const Level = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-size: 12px;
      font-weight: 600;
      color: #16325c;
    }

    p {
      font-size: 12px;
      font-weight: 600;
      color: #b5bac8;

      span {
        color: #16325c;
      }
    }
  }
`

export const InputLevels = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 60px;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    position: relative;
    color: #1c8eff;
  }

  input:after {
    content: '';
    display: block;
    width: 40px;
    height: 2px;
    position: absolute;
    background: #b5bac8;
    border-radius: 8px;
    left: 15px;
    top: 50%;
  }

  div:nth-child(2) {
    input:before {
      content: '';
      display: block;
      width: 50px;
      height: 2px;
      position: absolute;
      background: #b5bac8;
      border-radius: 8px;
      right: 15px;
      top: 50%;
    }
  }

  div:nth-child(3) {
    input:before {
      content: '';
      display: block;
      width: 50px;
      height: 2px;
      position: absolute;
      background: #b5bac8;
      border-radius: 8px;
      right: 15px;
      top: 50%;
    }
  }

  div:nth-child(4) {
    input:after {
      display: none;
    }
    input:before {
      content: '';
      display: block;
      width: 50px;
      height: 2px;
      position: absolute;
      background: #b5bac8;
      border-radius: 8px;
      right: 15px;
      top: 50%;
    }
  }
`
