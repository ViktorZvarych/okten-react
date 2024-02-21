import {useContext} from "react";
import {Context} from "../hocs";

const useAppContext = () => useContext(Context);

export {useAppContext}