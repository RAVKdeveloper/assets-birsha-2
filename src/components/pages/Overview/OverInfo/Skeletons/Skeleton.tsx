import React from "react"
import ContentLoader from "react-content-loader"

const OverviewBalanceMainLoader: React.FC = () => (
  <ContentLoader 
    speed={2}
    width={180}
    height={79}
    viewBox="0 0 180 79"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="5" ry="5" width="110" height="32" /> 
    <rect x="2" y="48" rx="5" ry="5" width="175" height="14" />
  </ContentLoader>
)

export default OverviewBalanceMainLoader