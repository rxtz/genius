import _useSWR from 'swr';

export const useSWR = (url: string, revalidate = false) => {
  const { data, isLoading, error } = _useSWR(
    url,
    (...args) => fetch(...args).then((res) => res.json()),
    {
      revalidateIfStale: revalidate,
      revalidateOnFocus: revalidate,
      revalidateOnReconnect: revalidate,
    },
  );

  return [data, isLoading, error];
};

export default useSWR;
