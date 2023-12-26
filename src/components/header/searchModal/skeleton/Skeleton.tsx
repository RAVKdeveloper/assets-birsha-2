import React, { FC } from "react"
import ContentLoader from "react-content-loader"


const SearchLoader: FC = () => (
    <ContentLoader 
    speed={2}
    width={500}
    height={47}
    viewBox="0 0 500 47"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="32" y="15" rx="5" ry="5" width="75" height="17" /> 
    <rect x="123" y="19" rx="5" ry="5" width="25" height="12" /> 
    <rect x="446" y="15" rx="5" ry="5" width="35" height="14" /> 
    <rect x="306" y="16" rx="5" ry="5" width="83" height="15" />
  </ContentLoader>
)

export default SearchLoader