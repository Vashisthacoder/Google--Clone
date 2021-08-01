import { useRouter } from "next/dist/client/router";
import { useRef } from "react";
import styles from'./Header.module.css'
import SearchIcon from '@material-ui/icons/Search';


function Header() {
  const searchInputRef = useRef(null)
  const router = useRouter();

  const search = (e) =>{

    e.preventDefault();
      const term = searchInputRef.current.value
      
      if (!term) return;

      router.push(`/Search?term=${term}`)
  }

    return (

        <div>




        
<form>
      

      <div  >
       
       <input
        ref={searchInputRef} type="text" id={styles.input}/>
        <SearchIcon id={styles.icon}/>
  
      </div>
  
      <div>
        
        <button onClick={search} ></button>
        
  
      </div>

      <div className={styles.name}>

             
<a href="https://timesofindia.indiatimes.com/" id={styles.news}> <h1>NEWS</h1>  </a >
<a href="https://www.bing.com/maps?FORM=Z9LH2" id={styles.maps} ><h1>MAPS</h1>  </a> 
<a href="https://www.imagesbazaar.com/" id={styles.images}> <h1>IMAGES</h1>  </a >
<a href="https://www.nykaa.com/" id={styles.shopping}> <h1>SHOPPING</h1>  </a >



</div>
  
  
   </form>

    <div>

     
    </div>
   


   
  </div>

  )
  }
  export default Header; 