const LoadingStatus = (props) => (
    <div data-testid="loading">{props.loadingText}</div>
);

const Loader = ({children, isLoading, hasError}) => {
  return  !isLoading && isLoading !== null && !hasError  && hasError !== null?
         children :
        isLoading ? 
         <LoadingStatus loadingText={'Loading data...'} /> : 
        hasError ? 
        <LoadingStatus loadingText={'There was some error loading data!'} /> :
        null; 
}
export default Loader;