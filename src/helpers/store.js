import { createStore,action,thunk} from "easy-peasy"

const currentModel = {
    current : "splash",
    updateCurrent : action((state,data)=>state.current = data)
}

export const AppStore = createStore({
    current : currentModel
})