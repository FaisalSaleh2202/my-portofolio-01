'use client';
import { useParams } from 'next/navigation';
import { getWork } from '@/utils/data-my-works';
import { useEffect, useState } from 'react';

const page = () => {
  const params = useParams();
  const { id } = params;

  const [detail, setDetail] = useState({});

  useEffect(() => {
    setDetail(getWork(Number(id)));
  }, [id]);

  console.log(detail);

  return <div>detail page</div>;
};

export default page;
