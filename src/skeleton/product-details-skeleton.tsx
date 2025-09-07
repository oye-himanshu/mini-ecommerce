const ProductSkeleton = () =>{
    return(
        <div className="max-w-4xl mx-auto p-4 animate-pulse">
  <div className="bg-gray-300 h-96 w-full rounded-md mb-6"></div>

  <div className="space-y-4">
    <div className="h-4 w-32 bg-gray-300 rounded"></div>

    <div className="h-6 w-3/4 bg-gray-300 rounded"></div>

    <div className="h-6 w-24 bg-gray-300 rounded"></div>

    <div className="h-4 w-32 bg-gray-300 rounded"></div>

    <div className="space-y-2">
      <div className="h-4 w-full bg-gray-300 rounded"></div>
      <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
      <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
    </div>

    <div className="flex space-x-4 mt-6">
      <div className="h-12 w-32 bg-gray-300 rounded"></div>
      <div className="h-12 w-32 bg-gray-300 rounded"></div>
    </div>

    <div className="h-6 w-20 bg-gray-300 rounded mt-4"></div>
  </div>
</div>
    )
}

export default ProductSkeleton