import  Link from 'next/link';

function Product ({productId=100}){


    return (
        <div> 
        <li>
        <Link href="/">
        <a> home</a>
        </Link>
        </li>
       
       
        <li>
        <Link href="/product/1">
        <a> product 1</a>
        </Link>
        </li>
        <li>
          <Link href="/product/2" replace>
        <a>product 2</a> 
        </Link>
        </li>
        <li>
        <Link href="/product/3" replace>
        <a>product 3</a>
        
        </Link>
        </li>
        <li>
        <Link href={`/product/${productId}`}>
        <a>product no {productId}</a>
        </Link>
        </li>
        
       
       
        </div>
    )
}

export default Product