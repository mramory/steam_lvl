import { useEffect, useState } from 'react'
import { MainPage } from './pages/MainPage/MainPage'
import { useQuery } from './utils/useQuery';
import axios from 'axios';
import { setIsAuth, setUserInfo, setUserLevelData } from './redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { instanse } from './api';


function App() {

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const isAuth = useSelector(state => state.user.isAuth)

  let query = useQuery();
  useEffect(() => {
    if(query.get('openid.claimed_id')){
      setLoading(true)
      const url = query.get('openid.claimed_id').split("/")
      const id = url[url.length-1]
      Promise.all([
        instanse.get(`getBadges?id=${id}`)
        .then(res => {
          dispatch(setUserLevelData({badges: res.data.badges, level: res.data.player_level, xp: res.data.player_xp}))
        }),
        instanse.get(`getUserInfo?id=${id}`)
        .then(res =>{
          dispatch(setUserInfo({name: res.data.players[0].personaname, avatar: res.data.players[0].avatarfull}))
        })
      ])
      .then(res =>{
        dispatch(setIsAuth())
        setLoading(false)
      })
    }
  }, [])

  return (
    <>
      <MainPage loading={loading} isAuth={isAuth} />
    </>
  )
}

export default App
