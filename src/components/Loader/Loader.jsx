import { Hearts } from "react-loader-spinner";
import { WrapperLoader } from "./Loader.styled";

export const Loader = () => (
    <WrapperLoader>
        <Hearts
            height="200"
            width="200"
            color="var(--color-background-accent)"
            ariaLabel="hearts-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </WrapperLoader>
);