import ContentLoader from 'react-content-loader';

function DestinationLoader() {
  return (
    <ContentLoader title width="100%" height="1000">
      {/* Gallery */}
      <rect x="0" y="0" rx="0" ry="0" width="100%" height="500" />

      {/* Description Section */}
      <rect x="0" y="520" rx="0" ry="0" width="60%" height="40" />
      <rect x="0" y="570" rx="0" ry="0" width="130" height="17" />
      <rect x="0" y="590" rx="0" ry="0" width="300" height="15" />
      <rect x="0" y="630" rx="0" ry="0" width="300" height="30" />
      <rect x="0" y="670" rx="0" ry="0" width="50%" height="30" />
      <rect x="0" y="710" rx="0" ry="0" width="40%" height="20" />

      {/* Right */}
      <rect x="70%" y="520" rx="0" ry="0" width="30%" height="30" />
      <rect x="70%" y="560" rx="0" ry="0" width="30%" height="20" />
      <rect x="70%" y="590" rx="0" ry="0" width="20%" height="20" />
    </ContentLoader>
  );
}

export default DestinationLoader;
