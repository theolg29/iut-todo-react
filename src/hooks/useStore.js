import { useSnapshot } from "valtio";
import Store from "../store/Store";

export function useStore() {
    return useSnapshot(Store);
}
