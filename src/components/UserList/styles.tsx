import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;
  height: 386px;

  background-color: #ffffff;
  border-radius: 8px;

  padding: 10px;

  overflow: hidden;

  .users {
    width: 100%;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: #d7dbe7;
    }
  }
`

export const Header = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 0.5fr 2fr 0.5fr;
  text-align: start;

  width: 100%;
  margin-bottom: 10px;

  p {
    font-weight: 600;
    font-size: 13px;
    line-height: 17px;
    color: #8a94a6;
  }
`

export const List = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 0.5fr 2fr 0.4fr;
  text-align: start;

  width: 100%;
  margin-bottom: 10px;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #f7f4f4;
    cursor: pointer;
    padding: 5px;
  }

  span {
    font-weight: 600;
    font-size: 13px;
    line-height: 17px;
    color: #16325c;
  }

  .user-info {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      margin-right: 10px;
    }

    svg {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      margin-right: 10px;
    }

    > p {
      font-weight: 600;
      font-size: 13px;
      line-height: 17px;
      color: #16325c;
    }
  }
`
