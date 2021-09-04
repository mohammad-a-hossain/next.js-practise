
import Link from 'next/link';

 function Home() {
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
   
      
      </div>
    
      
     
   
  )
}
export default Home