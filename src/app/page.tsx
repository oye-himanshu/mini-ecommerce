import Link from "next/link"
import { Icon } from '@iconify/react';

const ProductListingPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-2 h-full">
      <h1 className="text-4xl font-semibold">Welcome to the Ecommerce</h1>
      <Link href='/products' className="hover:text-blue-600 duration-200 flex items-center gap-1"><span>Shop Now</span> <span>
        <Icon icon='stash:arrow-right' fontSize={20} />
      </span></Link>
    </div>
  )
}
export default ProductListingPage