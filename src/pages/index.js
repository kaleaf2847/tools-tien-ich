import { ToolsItem, ToolsList } from '@components';
import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';
import { DefaultLayout } from '@layouts/DefaultLayout';

const items = [
  {
    img: '/image/an1.jpg',
    name: 'Giới thiệu tên công cụ',
  },
  {
    img: '/image/an1.jpg',
    name: 'Giới thiệu tên công cụ',
  },
  {
    img: '/image/an1.jpg',
    name: 'Giới thiệu tên công cụ',
  },
  {
    img: '/image/an1.jpg',
    name: 'Giới thiệu tên công cụ',
  },
  {
    img: '/image/an1.jpg',
    name: 'Giới thiệu tên công cụ',
  },
  {
    img: '/image/an1.jpg',
    name: 'Giới thiệu tên công cụ',
  },
  {
    img: '/image/an1.jpg',
    name: 'Giới thiệu tên công cụ',
  },
  {
    img: '/image/an1.jpg',
    name: 'Giới thiệu tên công cụ',
  },
  {
    img: '/image/an1.jpg',
    name: 'Giới thiệu tên công cụ',
  },
  {
    img: '/image/an1.jpg',
    name: 'Giới thiệu tên công cụ',
  },
];

function Home() {
  const [numberOfItem, setNumberOfItem] = useState();

  const handleResizeWidth = () => {
    if (window.innerWidth >= 1280) {
      setNumberOfItem(10);
    } else if (window.innerWidth >= 1024) {
      setNumberOfItem(8);
    } else if (window.innerWidth >= 768) {
      setNumberOfItem(6);
    } else {
      setNumberOfItem(2);
    }
  };

  useEffect(() => {
    handleResizeWidth();
    window.addEventListener('resize', handleResizeWidth);
    return () => {
      window.removeEventListener('resize', handleResizeWidth);
    };
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Trang Chủ | Toolstienich</title>
      </Head>
      <div className="w-9/12 mx-auto mt-48 mb-32">
        <ToolsList title="Nổi bật">
          {items.map((item, index) => {
            if (index < numberOfItem) {
              return <ToolsItem key={index} img={item.img} name={item.name} />;
            }
          })}
        </ToolsList>
        <ToolsList title="Mới ra" className="mt-8">
          {items.map((item, index) => {
            if (index < numberOfItem) {
              return <ToolsItem key={index} img={item.img} name={item.name} />;
            }
          })}
        </ToolsList>
      </div>
    </Fragment>
  );
}

Home.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
