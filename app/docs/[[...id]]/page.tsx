interface DocsIDPageProps {
  params: {
    id: string;
  };
}

const DocsIDPage: React.FC<DocsIDPageProps> = ({ params }) => {
  return <div>docs id {params.id}</div>;
};

export default DocsIDPage;
