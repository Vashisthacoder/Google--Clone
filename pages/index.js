import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import RoomIcon from '@material-ui/icons/Room';
import { useRef } from 'react';
import { useRouter } from 'next/dist/client/router';

export default function Home() {

const searchInputRef = useRef(null)
const router = useRouter() 

const search =(e)=>{
  e.preventDefault()

  const term = searchInputRef.current.value
  if(! term) return;
  router.push(`/search?term=${term}`)
}

  return (
    <div className={styles.container}>
      
    
{/* Header */}

<Image src="/Assets/weather2.png"
     alt="logo"
     width="215"
     height="138"/>


<Image src="/Assets/logo4.png"
     alt="logo"
     width="215"
     height="138"/>

     {/*Right*/}
 
 <div className={styles.right}>
 <a href="https://www.indiatoday.in/" id={styles.image}> <h1>News</h1>  </a >
 <a href="https://yandex.com/maps/" id={styles.maps} ><h1>Maps</h1>  </a>

</div>
  

   <div className={styles.icon}>

   <NotificationsIcon/>
   <AppsIcon/>

   

   </div>

   <div>
     <form>

     <input ref={searchInputRef}/>

     <button onclick={search}></button>
     </form>
    

   </div>


    </div>
  )
}
