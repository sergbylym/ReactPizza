import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={290}
    height={500}
    viewBox="0 0 290 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="125" cy="125" r="125" /> 
    <rect x="1" y="282" rx="14" ry="14" width="280" height="40" /> 
    <rect x="1" y="330" rx="15" ry="15" width="280" height="88" /> 
    <rect x="1" y="423" rx="15" ry="15" width="109" height="45" /> 
    <rect x="233" y="455" rx="0" ry="0" width="18" height="2" /> 
    <rect x="166" y="422" rx="43" ry="43" width="109" height="45" />
  </ContentLoader>
)

export default Skeleton;
