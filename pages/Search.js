import Header from "./component/Header";
import {API_KEY , CONTEXT_KEY} from '../keys';
import Response from "../Response";
import { useRouter } from "next/dist/client/router";
import SearchResults from "./component/SearchResults";


function Search({results}) {
    const router = useRouter();
    console .log(results);

    return (


        <div>

            <div>

             <title>{router.query.term}-Go-yorker Search</title>    

             </div>

        <Header/>

        <SearchResults results={results}/>
            
        </div>
    )
}

export default Search;

export async function getServerSideProps(context) {
    const useDummyData = false;
    const startIndex = context.query.start || "0";
    
    const data = useDummyData 
    ? Response 
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyAgzmnoE89r2hj3ktfqzYkGVYqLVHDKUB8&cx=f8b9f0c7eb1fa1b7d&q=${context.query.term}&start=${startIndex}`)
    .then(response => response.json());

    return {
        props: {
            results:data,
        }
    }
}


