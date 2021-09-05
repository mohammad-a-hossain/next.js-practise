
import Link from 'next/link';
import { useRouter } from 'next/router';

 function Home() {
     const router =  useRouter()

    const handleButton=()=>{
         console.log('order place')
         alert('order placed')
         /* router.push('/product') */
         router.replace('/product')

    }
  return (
      <div>
      <li>
      <Link href="/blog"> 
      <a>To blog</a>
      </Link>
      </li>
      <li>   
      <Link href="/product"> 
      <a>To production</a>
      </Link>
      </li>
   
      <button onClick={handleButton}>order</button>
      </div>
    
      
     
   
  )
}
export default Home