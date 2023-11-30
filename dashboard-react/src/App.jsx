import Topbar from "./components/Topbar";
import React from 'react'
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const Principal = styled.section`
  margin: 0%;
  padding: 0%;
`;

const Main = styled.main`
  display: flex;
`


export default function App() {
  return (
    <Principal>
        <header>
          <Topbar/>
      </header>
      <Main>
      </Main>
    </Principal>
  )
}
