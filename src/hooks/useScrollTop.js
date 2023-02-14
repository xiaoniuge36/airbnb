import {useLocation} from 'react-router-dom'
import {useEffect} from 'react'

// 监听页面切换，只要切换页面就使其滚动到顶部
export default function useScrollTop() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
}