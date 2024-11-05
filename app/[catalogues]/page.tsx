"use client";
import Image from "next/image";
import Link from "next/link";
import products from "../../data/products.json";

const Catalogues = ({ params }: { params: { catalogues: string } }) => {
  console.log(params.catalogues);
  return (
    <section className="w-full h-full text-gray-600 bg-green-200 body-font">
      <h1 className="text-3xl pt-4 font-black text-center">
        {decodeURIComponent(params.catalogues).toUpperCase()}
      </h1>
      <div className="container py-16 mx-auto">
        {decodeURIComponent(params.catalogues) === "one piece" && (
          <div className="flex flex-wrap -m-4">
            {products
              .filter(
                (product: any) =>
                  product.category === decodeURIComponent(params.catalogues)
              )
              .map((product: any) => (
                <div key={product.id} className="lg:w-1/3 md:w-1/2 p-2 ">
                  <Link href="#">
                    <div className="p-2 bg-gray-100 hover:bg-white rounded-lg shadow-sm hover:shadow-2xl transition-shadow duration-200">
                      <Image
                        height={3000}
                        width={3000}
                        alt={product.category + " " + product.name}
                        className="object-cover object-center w-full h-full rounded-md"
                        src={product.image}
                      />
                      <div className="mt-4">
                        <h3 className="text-xs font-thin tracking-widest text-gray-400">
                          {decodeURIComponent(params.catalogues).toUpperCase()}
                        </h3>
                        <h2 className="text-2xl font-bold tracking-widest text-blue-900 text-right overline">
                          {product.name}
                        </h2>
                        <div className="flex justify-between text-gray-800">
                          <p className="mt-1">Code {product.code}</p>
                          <p className="mt-1 text-green-600">
                            ₹ {product.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalogues;