import {useRouter} from 'next/router'

function ReviewDetails (){
     const router = useRouter()
     const {productId,reviewId}= router.query
    return <h1>ReviewDetails page {productId}
    and review {reviewId}</h1>
}

export default ReviewDetails