import React, { useState } from "react";
import { styled } from "styled-components";
interface LayoutProps {
  children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
      <LayoutStyles style={{ overflow: "hidden" }}>
        {children}
      </LayoutStyles>
  )
}

const LayoutStyles = styled.div`
  width: 100%;
`

export default Layout