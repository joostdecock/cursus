import { useState } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { navigate as gatsbyNavigate } from 'gatsby'

import useLocalStorage from './useLocalStorage'

function useApp() {

  // Persistent state
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  const [notification, setNotification] = useLocalStorage('notification')

  // React State
  const [crumbs, setCrumbs] = useState([])
  const [description, setDescription] = useState('Informatica voor volwassenen')
  const [image, setImage] = useState(`https://freesewing.org/share/language.wide.jpg`)
  const [loading, setLoading] = useState(false)
  const [menu, setMenu] = useState(false)
  const [title, setTitle] = useState('Cursus')
  const [mounted, setMounted] = useState(false) // false until app is mounted

  // Persist user data to local storage
  const persist = (data) => {
    if (data.theme) setTheme(data.theme)
  }

  // SSR-save navigate method
  const navigate = (slug) => {
    if (typeof window !== 'undefined') gatsbyNavigate(slug)
  }

  // Toggles
  const toggleDarkMode = () => setTheme(theme === 'light' ? 'dark' : 'light')
  const toggleMenu = () => setMenu(!menu)
  const closeNav = (evt) => null

  // Media queries
  const mobile = useMediaQuery('(max-width:599px)')
  const tablet = useMediaQuery('(min-width: 600px) and (max-width: 959px)')
  const slate = useMediaQuery('(min-width: 960px) and (max-width: 1199px)')

  // These are used in other methods
  let core = {
  }

  return {
    // Helper methods
    persist,
    navigate,
    // Persistent state
    theme,
    setTheme,
    // React state
    loading,
    setLoading,
    crumbs,
    setCrumbs,
    description,
    setDescription,
    image,
    setImage,
    menu,
    setMenu,
    title,
    setTitle,
    mounted,
    setMounted,
    // Toggles
    toggleDarkMode,
    toggleMenu,
    closeNav,
    // Media queries
    mobile,
    tablet,
    slate,
  }
}

export default useApp
