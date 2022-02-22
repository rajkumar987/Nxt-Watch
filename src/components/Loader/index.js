import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {LoaderEl} from './styledComponents'

const LoaderComp = () => (
  <LoaderEl data-testid="loader">
    <Loader
      type="Bars"
      color="#00BFFF"
      height={50}
      width={50}
      data-testid="loader"
    />
  </LoaderEl>
)

export default LoaderComp
