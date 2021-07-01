import { useEffect } from 'react';

export default function NotFound(){
    useEffect(() => {
    document.title = 'Page not Found!';
     }, []);
     
    return (
        <div className="bg-white mx-1/2">
            <img src="/images/not-found.jpg" alt="Error" width="60%"></img>
        </div>
    )
}