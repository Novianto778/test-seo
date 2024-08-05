import NewsDetailContainer from "@/components/features/news/detail/NewsDetailContainer";

type Props = {
  searchParams: {
    id: string;
    title: string;
  };
};

const NewsDetailPage = ({ searchParams }: Props) => {
  const id = searchParams.id;

  return (
    <div>
      <NewsDetailContainer id={id} />
      {/* <OtherNewsContainer /> */}
      {/* <OtherNewsClient /> */}
    </div>
  );
};

export default NewsDetailPage;
