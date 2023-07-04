import { DoubleLoadingSpinner } from "./LoadingSpinner.style";
interface I_Loader {
  innerSize: string;
  outerSize: string;
}
const LoadingSpinner = ({ innerSize, outerSize }: I_Loader) => {
  return <DoubleLoadingSpinner innerSize={innerSize} outerSize={outerSize} />;
};

export default LoadingSpinner;
