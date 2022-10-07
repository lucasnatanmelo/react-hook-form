import styled from 'styled-components';

// export const Main = styled.main`
//   position: absolute;
//   width: 100%;
//   height: 100vh;
//   padding: 0;
//   margin: 0;
//   box-sizing: border-box;
//   font-size: 1.2rem;
// `
// export const ScreenContent = styled.div`
//   width: 100%;
//   height: calc(100vh - 3.6rem);
//   display: flex;
//   flex-direction: column;
//   overflow: auto;
  
//   padding: 0.8rem;
//   box-sizing: border-box;
  
//   @media (max-width: 800px) {
//     height: calc(100% - 2.4rem);
//   }

// `

export const Form = styled.form`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  img{
    max-width: 100px;
  }
`
export const Label = styled.label`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid gray;
  height: 25px;
  width: 300px;
`

export const Button = styled.button`
  width: 300px;
  height: 40px;
  background-color: aqua;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`

export const Span = styled.span`
  color: red;
  position: absolute;
  margin-top: 50px;
`
export const Select = styled.select`
  border-radius: 5px;
  border: 1px solid gray;
  height: 25px;
  width: 300px;
`