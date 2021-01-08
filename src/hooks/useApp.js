import { useState } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import useTree from './useTree'
import useLocalStorage from './useLocalStorage'
import { navigate as gatsbyNavigate } from 'gatsby'
import ntr from './lib/tree'


function useApp() {

  // Persistent state
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  // React State
  const [description, setDescription] = useState('Informaticalessen voor (leuke) volwassenen')
  const [image, setImage] = useState(`https://les.joost.at/splash.png`)
  const [loading, setLoading] = useState(false)
  const [menu, setMenu] = useState(false)
  const [title, setTitle] = useState('Informaticalessen voor (leuke) volwassenen')
  const [mounted, setMounted] = useState(false) // false until app is mounted
  const [tree, setTree] = useState(useTree())

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

  // Methods for handling navigation tree
  const getOffspring = (slug) => {
    if (slug.length < 3) return [] // Gatsby build passes /*
    let ntree = {}
    Object.assign(ntree, tree)
    let page = ntr.getSelf(slug, ntree)
    if (!page) return []
    return page.offspring ? ntr.order(page.offspring) : []
  }

  const getNext = (slug) => {
    let ntree = {}
    Object.assign(ntree, tree)
    let next = ntr.getFirstOffspring(slug, ntree)
    if (!next) next = ntr.getNextSibling(slug, ntree)
    if (!next) next = ntr.getNextParent(slug, ntree)

    return next
  }

  const getPrev = (slug) => {
    let ntree = {}
    Object.assign(ntree, tree)
    let prev = ntr.getPrevSibling(slug, ntree)
    if (!prev) prev = ntr.getParent(slug, ntree)

    return prev
  }

  const getCrumbs = (slug) => {
    let ntree = {}
    Object.assign(ntree, tree)
    let crumbs = []
    let chunks = slug.split('/').slice(1, -1)
    for (let crumb of chunks) {
      if (!ntree.offspring) return crumbs
      ntree = ntree.offspring[crumb]
      if (!ntree) return crumbs
      crumbs.push({ title: ntree.title, slug: ntree.slug })
    }

    return crumbs.slice(0, -1)
  }

  const treeProps = (slug, prevNext = true) =>
    prevNext
      ? {
          slug,
          prev: getPrev(slug),
          next: getNext(slug),
          crumbs: getCrumbs(slug)
        }
      : {
          slug,
          crumbs: getCrumbs(slug)
        }

  return {
    // Helper methods
    persist,
    navigate,
    getOffspring,
    getPrev,
    getNext,
    getCrumbs,
    treeProps,
    // Persistent state
    theme,
    setTheme,
    // React state
    loading,
    setLoading,
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
    tree,
    setTree,
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
