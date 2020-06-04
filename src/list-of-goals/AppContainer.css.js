import styled from 'styled-components';
import { device } from 'breakpoints';

const Container = styled.div`
  display: grid;
  width: 85%;
  margin: 20px auto;;
  @media ${device.L} {
    grid: 
    [row1-start] 'form myGoals' auto [row1-end]
    [row2-stary] 'goalsAchieved myGoals' auto [row2-end]
    [row3-stary] '. myGoals' 1fr [row3-end]
    / 45% 55%;
    column-gap: 30px;
  }
  .form{
    display: grid;
    text-align: left;
    @media ${device.L} {
      grid-area: form;
      align-self: start;
    }
    &__input {
      padding: 4px 6px;
      border: 1px solid;
      margin: 4px 0;
      &::placeholder {
        font-size: 10px;
      }
    }
    &__date {
      border: 1px solid;
      justify-self: left;
      padding: 2px 4px;
      margin: 4px 0;
    }
  }

  .tasks {
    overflow: hidden;
    margin: 30px 0 5px 0;
    @media ${device.L} {
      grid-area: myGoals;
    }
    .tasksToDo {
      max-height: 35vh;
      width: 100%;
      padding-right: 17px;
      overflow-y: scroll;
      word-wrap: break-word;
      @media ${device.L} {
        max-height: 80vh;
      }
      &__taskToDo {
        padding: 5px 0;
        &:nth-child(even) {
          background-color: rgba(35, 119, 165, .6);
        }
        p {
          margin: 0;
          font-size: 10px;
        }
      }
    }
  }

  .tasks-done {
    overflow: hidden;
    margin: 30px 0 5px 0;
    @media ${device.L} {
      grid-area: goalsAchieved;
    }
    .achieved-goals {
      max-height: 35vh;
      width: 100%;
      overflow-y: scroll;
      padding-right: 17px;
      word-wrap: break-word; 
      @media ${device.L} {
        max-height: 58vh;
      }
      &__goal {
        padding: 5px 0;
        &:nth-child(even) {
          background-color: rgba(35, 119, 165, .6);
        }
        p {
          font-size: 10px;
          margin: 0;
        }
      }
    }
  }

  .button {
    &--form {
      border: none;
      background-color: #007bff;
      border-radius: 10%;
      padding: 4px 6px;
      justify-self: left;
      margin-bottom: 10px;
      cursor: pointer;
    }
    &--done {
      border: none;
      padding: 4px 6px;
      background-color: #e6ffff;
      transition: .2s;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
      &:focus {
        outline: none;
      }
    }
    &--X {
      border: none;
      padding: 4px 6px;
      background-color: transparent;
      color: #FF0000;
      font-weight: bold;
      transition: .2s;
      cursor: pointer;
      &:hover {
        transform: scale(1.4);
      }
      &:focus {
        outline: none;
      }
    }
  }

  h1 {
    text-align: center;
    margin-bottom: 10px;
  }

  .green {
    color: green;
  }

  .red {
    color: #FA2F2F;
  }
`

export default Container;