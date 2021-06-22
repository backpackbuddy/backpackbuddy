import ContentLoader from 'react-content-loader';

function DestinationCardLoader() {
  return (
    <ContentLoader title height={355} width="100%">
      <rect x="0" y="0" rx="0" ry="0" width="100%" height="190" />
      <rect x="0" y="200" rx="0" ry="0" width="80%" height="17" />
      <rect x="0" y="230" rx="0" ry="0" width="70%" height="25" />
      <rect x="0" y="260" rx="0" ry="0" width="50%" height="17" />
    </ContentLoader>
  );
}

export default DestinationCardLoader;
