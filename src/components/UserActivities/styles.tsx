import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  height: 386px;

  background-color: #ffffff;
  border-radius: 8px;
  padding: 10px;
  overflow: hidden;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;

  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #16325c;
  }

  p {
    font-weight: 600;
    font-size: 13px;
    color: #8a94a6;
  }
`

export const ActivitiesContainer = styled.div`
  &.activescroll {
    padding: 10px;
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

export const Activity = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    text-align: start;
    margin-left: 10px;

    span {
      font-weight: 600;
      font-size: 12px;
      color: #8a94a6;
      margin-bottom: 5px;
    }

    p {
      font-weight: 400;
      font-size: 13px;
      line-height: 17px;
      color: #16325c;
    }
  }
`

export const Divider = styled.div`
  border-bottom: 1px solid #ddd;
  margin: 20px 0;
  width: 100%;
`
