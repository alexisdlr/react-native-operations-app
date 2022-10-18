import React from 'react'
import { Link } from 'react-router-native'
import StyledText from './StyledText'

function StyledLink({children,style, to}) {
  return (
      <Link to={to}> 
        <StyledText bold style={style}>
          {children}
        </StyledText>
      </Link>
  )
}

export default StyledLink