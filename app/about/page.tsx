import React from "react";
import Image from "next/image";

function page() {
  return (
    <div className="container mx-auto py-10">
      <div>
        <div className="grid grid-cols-1 text-center">
          <h3 className="text-lg md:text-2xl font-bold bg-sky-400 py-3 rounded-2xl text-white">About Us</h3>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4 mt-4">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2
         md:grid-cols-3 lg:grid-cols-6 p-4">
          <div className="col-span-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nisi
            reiciendis beatae ipsa iusto, deserunt eius quibusdam esse sit iure
            sint minima laborum numquam veritatis ipsam corrupti distinctio
            nostrum hic repellendus labore deleniti voluptatum culpa eaque
            saepe! Nisi ut laudantium laboriosam ducimus. Nulla aspernatur quo
            possimus nihil ipsum modi maiores in quibusdam nesciunt magni
            cupiditate, debitis incidunt. In voluptatibus ab error vitae quas
            earum nemo commodi quasi nulla consequuntur delectus veniam, esse
            illum harum ducimus recusandae non nobis. Inventore officiis
            nesciunt adipisci cupiditate repellendus eligendi, totam ad nobis
            culpa aliquid natus perferendis aperiam quaerat iure dolore
            aspernatur veniam maiores pariatur!
            saepe! Nisi ut laudantium laboriosam ducimus. Nulla aspernatur quo
            possimus nihil ipsum modi maiores in quibusdam nesciunt magni
            cupiditate, debitis incidunt. In voluptatibus ab error vitae quas
            earum nemo commodi quasi nulla consequuntur delectus veniam, esse
            illum harum ducimus recusandae non nobis. Inventore officiis
            nesciunt adipisci cupiditate repellendus eligendi, totam ad nobis
            culpa aliquid natus perferendis aperiam quaerat iure dolore
            aspernatur veniam maiores pariatur!
            saepe! Nisi ut laudantium laboriosam ducimus. Nulla aspernatur quo
            possimus nihil ipsum modi maiores in quibusdam nesciunt magni
            cupiditate, debitis incidunt. In voluptatibus ab error vitae quas
            earum nemo commodi quasi nulla consequuntur delectus veniam, esse
            illum harum ducimus recusandae non nobis. Inventore officiis
            nesciunt adipisci cupiditate repellendus eligendi, totam ad nobis
            culpa aliquid natus perferendis aperiam quaerat iure dolore
            aspernatur veniam maiores pariatur!
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 p-4">
          <div className="col-span-full mx-auto">
            <Image
              src="/assets/images/about.png" 
              alt="about"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
