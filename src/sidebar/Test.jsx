import { useMemo } from "react";
import { useState } from "react";

// categories -> kategoriyalar royhati
const categories = [
  {
    id: 1,
    link: "#",
    title: "Smartfonlar va gadjetlar",
  },
  {
    id: 2,
    link: "#",
    title: "Noutbuklar, kompyuterlar",
  },
  {
    id: 3,
    link: "#",
    title: "TV va proektorlar",
  },
  {
    id: 4,
    link: "#",
    title: " Audiotexnikalar",
  },
  {
    id: 5,
    link: "#",
    title: "  Uy uchun texnika",
  },
  {
    id: 6,
    link: "#",
    title: "Oshxona uchun texnika",
  },
  {
    id: 7,
    link: "#",
    title: " Go'zallik va sog'liq",
  },
  {
    id: 8,
    link: "#",
    title: "Aqlli uy",
  },
  {
    id: 9,
    link: "#",
    title: "O'yin uchun texnika",
  },
  {
    id: 10,
    link: "#",
    title: "Sport tovarlar",
  },
  {
    id: 11,
    link: "#",
    title: "Avtotovarlar",
  },
  {
    id: 12,
    link: "#",
    title: "Asboblar va bog ' texnikasi",
  },
  {
    id: 13,
    link: "#",
    title: "Bolalar buyumlar",
  },
  {
    id: 14,
    link: "#",
    title: "Qurilish va ta'mirlash",
  },
];

// subCategories -> kategoriyalarni ichindagi kategoriyalar royhati
const subCategories = [
  {
    id: 1,
    link: "#",
    title: "Smartfonlar va telefonlar",
    categoryId: 1,
    children: [
      {
        id: 1,
        link: "http://localhost:5173/chegirma/7",
        title: "Apple iPhone",
      },
      {
        id: 2,
        link: "http://localhost:5173/chegirma/8",
        title: "Tecno smartfonlar",
      },
      {
        id: 3,
        link: "#",
        title: " Xiaomi smartfonlar",
      },
      {
        id: 4,
        link: "#",
        title: "Vivo smartfonlar",
      },
      {
        id: 5,
        link: "#",
        title: "Honor smartfonlar",
      },
      {
        id: 6,
        link: "#",
        title: "Samsung smartfonlar",
      },
      {
        id: 7,
        link: "#",
        title: "Smartfonlar",
      },
      {
        id: 8,
        link: "#",
        title: "Tugmali telefonlar",
      },
    ],
  },
  {
    id: 2,
    link: "#",
    title: "Gadjetlar",
    categoryId: 1,
    children: [
      {
        id: 1,
        link: "#",
        title: "Aqlli-soat",
      },
      {
        id: 2,
        link: "#",
        title: "Pulsometrlar",
      },
      {
        id: 3,
        link: "#",
        title: "Virtual haqiqat ko'zoynaklari",
      },
      {
        id: 4,
        link: "#",
        title: "Fitnes-brasletlar",
      },
      {
        id: 5,
        link: "#",
        title: "Bolalar aqlli soatlari",
      },
      {
        id: 6,
        link: "#",
        title: "Blog uchun tovarlar",
      },
    ],
  },
  {
    id: 13,
    link: "#",
    title: "Smartfonlar uchun aksessuarlar",
    categoryId: 1,
    children: [
      {
        id: 1,
        link: "#",
        title: "Smartfonlar uchun g’ilof",
      },
      {
        id: 2,
        link: "#",
        title: "iPhone uchun g’ilof",
      },
      {
        id: 3,
        link: "#",
        title: "Kabellar",
      },
      {
        id: 4,
        link: "#",
        title: "Quvvatlagich qurilmalar",
      },
    ],
  },
  {
    id: 14,
    link: "#",
    title: "Tegishli tovarlar",
    categoryId: 1,
    children: [
      {
        id: 1,
        link: "#",
        title: "Quloqchinlar",
      },
      {
        id: 2,
        link: "#",
        title: "Portativ akustika",
      },
      {
        id: 3,
        link: "#",
        title: "Portativ batareyalar",
      },
    ],
  },
  {
    id: 15,
    link: "#",
    title: "Soat va aksessuarlar",
    categoryId: 1,
    children: [
      {
        id: 1,
        link: "#",
        title: "Qol soati",
      },
    ],
  },
  {
    id: 3,
    link: "#",
    title: "Link 1.3",
    categoryId: 2,
    children: [
      {
        id: 1,
        link: "#",
        title: "Link 1.3.1",
      },
      {
        id: 2,
        link: "#",
        title: "Link 1.3.2",
      },
      {
        id: 3,
        link: "#",
        title: "Link 1.3.3",
      },
      {
        id: 4,
        link: "#",
        title: "Link 1.3.4",
      },
    ],
  },
  {
    id: 4,
    link: "#",
    title: "Link 1.4",
    categoryId: 2,
    children: [
      {
        id: 1,
        link: "#",
        title: "Link 1.4.1",
      },
      {
        id: 2,
        link: "#",
        title: "Link 1.4.2",
      },
      {
        id: 3,
        link: "#",
        title: "Link 1.4.3",
      },
      {
        id: 4,
        link: "#",
        title: "Link 1.4.4",
      },
    ],
  },
  {
    id: 5,
    link: "#",
    title: "Link 1.5",
    categoryId: 3,
    children: [
      {
        id: 1,
        link: "#",
        title: "Link 1.5.1",
      },
      {
        id: 2,
        link: "#",
        title: "Link 1.5.2",
      },
      {
        id: 3,
        link: "#",
        title: "Link 1.5.3",
      },
      {
        id: 4,
        link: "#",
        title: "Link 1.5.4",
      },
    ],
  },
  {
    id: 6,
    link: "#",
    title: "Link 1.6",
    categoryId: 3,
    children: [
      {
        id: 1,
        link: "#",
        title: "Link 1.6.1",
      },
      {
        id: 2,
        link: "#",
        title: "Link 1.6.2",
      },
      {
        id: 3,
        link: "#",
        title: "Link 1.6.3",
      },
      {
        id: 4,
        link: "#",
        title: "Link 1.6.4",
      },
    ],
  },
  {
    id: 7,
    link: "#",
    title: "Link 1.7",
    categoryId: 3,
    children: [
      {
        id: 1,
        link: "#",
        title: "Link 1.7.1",
      },
      {
        id: 2,
        link: "#",
        title: "Link 1.7.2",
      },
      {
        id: 3,
        link: "#",
        title: "Link 1.7.3",
      },
      {
        id: 4,
        link: "#",
        title: "Link 1.7.4",
      },
    ],
  },
  {
    id: 8,
    link: "#",
    title: "Link 1.8",
    categoryId: 3,
    children: [
      {
        id: 1,
        link: "#",
        title: "Link 1.8.1",
      },
      {
        id: 2,
        link: "#",
        title: "Link 1.8.2",
      },
      {
        id: 3,
        link: "#",
        title: "Link 1.8.3",
      },
    ],
  },
  {
    id: 9,
    link: "#",
    title: "Link 1.9",
    categoryId: 3,
    children: [
      {
        id: 1,
        link: "#",
        title: "Link 1.9.1",
      },
      {
        id: 2,
        link: "#",
        title: "Link 1.9.2",
      },
      {
        id: 3,
        link: "#",
        title: "Link 1.9.3",
      },
      {
        id: 4,
        link: "#",
        title: "Link 1.9.4",
      },
    ],
  },
  {
    id: 10,
    link: "#",
    title: "Link 1.10",
    categoryId: 4,
    children: [
      {
        id: 1,
        link: "#",
        title: "Link 1.10.1",
      },
      {
        id: 2,
        link: "#",
        title: "Link 1.10.2",
      },
      {
        id: 3,
        link: "#",
        title: "Link 1.10.3",
      },
    ],
  },
  {
    id: 11,
    link: "#",
    title: "Link 1.11",
    categoryId: 4,
    children: [
      {
        id: 1,
        link: "#",
        title: "Link 1.11.1",
      },
      {
        id: 2,
        link: "#",
        title: "Link 1.11.2",
      },
      {
        id: 3,
        link: "#",
        title: "Link 1.11.3",
      },
      {
        id: 4,
        link: "#",
        title: "Link 1.11.4",
      },
    ],
  },
  {
    id: 12,
    link: "#",
    title: "Link 1.12",
    categoryId: 5,
    children: [
      {
        id: 1,
        link: "#",
        title: "Link 1.12.1",
      },
      {
        id: 2,
        link: "#",
        title: "Link 1.12.2",
      },
      {
        id: 3,
        link: "#",
        title: "Link 1.12.3",
      },
      {
        id: 4,
        link: "#",
        title: "Link 1.12.4",
      },
    ],
  },
];

const Test = () => {
  // activeCategoryId -> hozirgi aktivniy kategoriya shu id li kategoriya ga toliqli ichki kategoriyalar ni chiqarasan
  const [activeCategoryId, setActiveCategoryId] = useState(1);

  // activeSubCategories -> har safar aktivniy kategoriya ozgarganda subCategories arrayini ichindan oshu id li category ga tegishli subCategory larni ajratib baradi
  const activeSubCategories = useMemo(() => {
    return subCategories.filter(
      (subCategory) => subCategory.categoryId === activeCategoryId
    );
  }, [activeCategoryId]);

  return (
    <main className="home-page h-[100vh] fixed top-[100] bg-white w-full left-0">
      <div>
        <div className="hover-menu ">
          {/* chap tarafdagi kategoriyalar royhati */}
          <ul className="hover-menu__categories bg-gray-100 pt-[40px] ps-[120px] w-[22%] h-[1000px]">
            <div className="">
              {categories.map((category) => (
                <li
                  key={category.id}
                  className={`hover-menu__category ${
                    activeCategoryId === category.id
                      ? "active"
                      : "hover-menu__category"
                  } `}
                  // (onMouseOver) hover bogan vahti id sini active atib qoyasan
                  onMouseOver={() => setActiveCategoryId(category.id)}
                >
                  <a href={category.link}>{category.title}</a>
                </li>
              ))}
            </div>
          </ul>

          {/* o'ng tarafdagi kategoriyalar royhati (activeSubCategories) -> aktivniy kategoriyaga tegishli kategoriyarlar ni chiqarasan */}
          <ul className="hover-menu__content ">
            {activeSubCategories.map((subCategory) => (
              // har bir kategoriyalar bolaki
              <li
                key={subCategory.id}
                className="hover-menu__subcategory pt-[30px]"
              >
                <a className="hover:text-[#ffbe1f]" href={subCategory.link}>{subCategory.title}</a>

                {/* oshu kategoriya bolaki ichindagi kategoriyalar */}
                <ul className="hover-menu__subcategory-links">
                  {subCategory.children.map((child) => (
                    <li key={child.id} className="hover-menu__subcategory-link">
                      <a className="hover:text-[#ffbe1f] py-[20px]" href={child.link}>{child.title}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Test;
