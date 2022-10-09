import { ToolsItem, ToolsList } from '@components/ToolsList';
import Head from 'next/head';
import { Fragment } from 'react';
import { DefaultLayout } from '@layouts/DefaultLayout';

function Home() {
  return (
    <Fragment>
      <Head>
        <title>toolstienich.com | Trang Chủ</title>
      </Head>
      <div className="w-9/12 mx-auto mt-48 mb-32">
        <ToolsList title="Nổi bật">
          <ToolsItem />
          <ToolsItem />
          <ToolsItem />
          <ToolsItem />
          <ToolsItem />
          <ToolsItem />
          <ToolsItem />
          <ToolsItem />
        </ToolsList>
        <ToolsList title="Mới ra" className="mt-8">
          <ToolsItem />
          <ToolsItem />
          <ToolsItem />
          <ToolsItem />
          <ToolsItem />
          <ToolsItem />
          <ToolsItem />
          <ToolsItem />
        </ToolsList>
      </div>
    </Fragment>
  );
}

Home.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
