import { Blocks } from "react-loader-spinner";
import "./style.scss";

const DetailSpinner = () => {
    return (
        <div className='spinner'>
            <Blocks
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
            />
        </div>
    );
}

export default DetailSpinner;