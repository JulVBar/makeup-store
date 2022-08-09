import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
    <ContentLoader
        className="product-item" 
        speed={2}
        width={275}
        height={440}
        viewBox="0 0 275 440"
        backgroundColor="#e7e9dd"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="2" y="7" rx="0" ry="0" width="270" height="270" /> 
        <rect x="3" y="284" rx="0" ry="0" width="270" height="30" /> 
        <rect x="4" y="322" rx="0" ry="0" width="270" height="25" /> 
        <rect x="5" y="359" rx="0" ry="0" width="270" height="25" />
    </ContentLoader>
)

export default Skeleton;