import { useRouter }  from 'next/router';
import useSWR from 'swr';


export const Result = () => {
    const router = useRouter();
    const { data, error } = useSWR(
        router.query.session_id
        ? `/api/checkout-sessions/${router.query.session_id}`
        : null,
        (url) => fetch(url).then(res => res.json())
    )
    const dataFound = JSON.stringify(data, null, 2)
    
    

    return (
        <div>
            <div>Payment result</div>
           
            <div>{dataFound}</div> 
            
        </div>
    )
}

export default Result