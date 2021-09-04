
import { useRouter } from 'next/router';

function Docs (){
    const router = useRouter()
    const {params =[]} = router.query //for stopping runtime error 
    console.log(params)
    if(params.length === 2){
        return <h3>we are viewing detail {params[2]} and {params[1]}}</h3>
    }else if(params.length ===1){
        return <h2>we are viewing category {params[1]}and {params[0]}</h2>
    }else{
         return <h1>this is docs page</h1>
    }
   
}

export default Docs