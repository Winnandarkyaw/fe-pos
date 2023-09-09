
import React, {  useState } from "react";

import { CategoryCard,CategoryCreateForm } from "../components/categories";
import { AiOutlinePlus } from "react-icons/ai";
import { BtnPrimary } from "../components/form";
import { LayoutProvider } from "../components/layout/LayoutProvider";

const category = [
  {
    id: 1,
    name: "Bakon",
    category_menu_items: [1, 2, 3, 5],
  },
  {
    id: 2,
    name: "Meat",
    category_menu_items: [1, 5],
  },
  {
    id: 3,
    name: "Juice",
    category_menu_items: [1, 2, 3, 5],
  },
];

export const Category = () => {
  const [openCreateForm, setOpenCreateForm] = useState(false);

  return (
    <>
    <LayoutProvider>
    <div className="w-full">
      <BtnPrimary
              className="shadow-custom"
              onClick={() => setOpenCreateForm(true)}
            >
              <AiOutlinePlus />{" "}
              <span className="pl-[5px]">Create Category</span>
            </BtnPrimary>
            <div className="flex flex-wrap sm:justify-start justify-evenly w-full">

      <CategoryCard
        category={{
          id: null,
          name: "Test",
          category_menu_items: [],
        }}
      />
      {category.map((i) => (
        <CategoryCard category={i} key={i.id} />
      ))}

      </div>
    </div>
    </LayoutProvider>
    {openCreateForm && (
        <CategoryCreateForm onClose={() => setOpenCreateForm(false)} />
      )}
    </>
  );
};


