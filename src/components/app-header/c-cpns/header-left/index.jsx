import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import IconLogo from 'src/assets/svg/icon_logo'
import { LeftWrapper } from './style'

const HeaderLeft = memo(() => {

  const navigate = useNavigate()
  function loginClickHandle() {
    navigate("/home")
  }

  return (
    <LeftWrapper>
      <div className='logo' onClick={loginClickHandle}>
        <IconLogo/>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft