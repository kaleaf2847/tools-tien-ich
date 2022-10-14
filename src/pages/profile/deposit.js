import { ProfileLayout } from '@layouts/ProfileLayout';
import { Fragment, useState } from 'react';
import { ListBox } from '@components/base/ListBox';
import { CheckIcon, ChevronUpDownIcon } from '@components/base/Icons';
import clsx from 'clsx';
import { DefaultLayout } from '@layouts/DefaultLayout';
import { InputText, DepositHistory } from '@components';
import Head from 'next/head';

const depositMethodList = [
  { depositMethod: 'Ngân hàng', types: ['MB Bank', 'Vietcombank'] },
  { depositMethod: 'Ví điện tử', types: ['Momo', 'Viettel Pay'] },
  { depositMethod: 'Thẻ cào', types: ['Viettel', 'MobiPhone'] },
];

function Deposit() {
  const [activeDepositMethodIndex, setActiveDepositMethodIndex] = useState(0);
  return (
    <>
      <Head>
        <title>Nạp Tiền | Toolstienich</title>
      </Head>
      <div className="xl:flex">
        <div className="mx-4">
          <h2 className="text-xl p-4">Nạp tiền</h2>
          <div className="text-gray-800 mx-auto w-fit md:ml-12 my-4 child:mb-6">
            <ListBox className="relative xl:w-72 sm:w-80 w-72">
              <ListBox.Button
                setActiveIndex={setActiveDepositMethodIndex}
                className="flex items-center w-full hover:opacity-90 bg-gray-100 shadow-md ring-1 ring-gray-200 py-1.5 rounded-xl"
              >
                {(activeIndex) => {
                  return (
                    <Fragment>
                      <span className="flex-grow">{depositMethodList[activeIndex].depositMethod}</span>
                      <ChevronUpDownIcon className="mr-2" />
                    </Fragment>
                  );
                }}
              </ListBox.Button>
              <ListBox.Box className="absolute z-10 top-12 bg-gray-100 rounded-xl shadow-md ring-1 ring-gray-200 w-full grandchild:py-1.5 grandchild:px-6 py-4 grandchild:cursor-pointer grandchild-hover:bg-gray-200 select-none">
                {depositMethodList.map((depositMethodItem, index) => {
                  return (
                    <ListBox.Item key={index}>
                      {(active) => {
                        return (
                          <div className={clsx(active && 'bg-gray-200', 'flex justify-between')}>
                            <span className="translate-y-px">{depositMethodItem.depositMethod}</span>
                            {active && <CheckIcon width={18} height={18} />}
                          </div>
                        );
                      }}
                    </ListBox.Item>
                  );
                })}
              </ListBox.Box>
            </ListBox>

            <ListBox className="relative xl:w-72 sm:w-80 w-72">
              <ListBox.Button className="flex items-center w-full hover:opacity-90 bg-gray-100 shadow-md ring-1 ring-gray-200 py-1.5 rounded-xl">
                {(activeIndex) => {
                  return (
                    <Fragment>
                      <span className="flex-grow">
                        {depositMethodList[activeDepositMethodIndex].types[activeIndex]}
                      </span>
                      <ChevronUpDownIcon className="mr-2" />
                    </Fragment>
                  );
                }}
              </ListBox.Button>

              <ListBox.Box className="absolute z-10 top-12 bg-gray-100 rounded-xl shadow-md ring-1 ring-gray-200 w-full grandchild:py-1.5 grandchild:px-6 py-4 grandchild:cursor-pointer grandchild-hover:bg-gray-200 select-none">
                {depositMethodList[activeDepositMethodIndex].types.map((type, index) => {
                  return (
                    <ListBox.Item key={index}>
                      {(active) => {
                        return (
                          <div className={clsx(active && 'bg-gray-200', 'flex justify-between')}>
                            <span className="translate-y-px">{type}</span>
                            {active && <CheckIcon width={18} height={18} />}
                          </div>
                        );
                      }}
                    </ListBox.Item>
                  );
                })}
              </ListBox.Box>
            </ListBox>
            <InputText title="Nhập số tiền" className="xl:w-72 sm:w-80 w-72"></InputText>
          </div>
        </div>
        <DepositHistory />
      </div>
    </>
  );
}

Deposit.getLayout = (page) => {
  return (
    <DefaultLayout>
      <ProfileLayout>{page}</ProfileLayout>
    </DefaultLayout>
  );
};

export default Deposit;
