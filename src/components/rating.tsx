'use client'

import { Rating } from '@smastrom/react-rating'

const RatingComponent: React.FC<{count:number}> = ({count}) => {
  return (
    <div className="flex justify-center items-center">
      <Rating
        style={{ maxWidth: 80 }}
        value={count}
        readOnly 
      />
    </div>
  )
}

export default RatingComponent
