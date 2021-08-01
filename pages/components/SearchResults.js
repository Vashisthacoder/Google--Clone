import styles from'./SearchResults.module.css'
import PaginationButtons from "./PaginationButtons"

function SearchResults({results}) {
    return (

        <div>

           


            {results.items?.map((result) =>(
                <div key={result.link} >
               
               <div>

                
               



               <a href={result.link}>
                   <h1 id={styles.c} className="truncate text-xl text-blue-800 font-medium " >{result.title}</h1>
               </a>
               </div>

               <p id={styles.d}>{result.snippet}</p>


                </div>


            ) )}

<PaginationButtons/>
            
            
        </div>
    )


}


export default SearchResults

