import { useReducer } from "react"

// Isso é o que permite a criação de valores pro banco, nas páginas de criação (as que tem um nome de entidade e Novo na frente) 

function reducer(state, action) {
    switch (action.tipo) {
        case "mudar":
            return {...state, [action.campo]: action.valor}
    }
}

export default (valorPadrao) => {
    const [state, dispatch] = useReducer(reducer, valorPadrao)

    return {
        valor: state,
        mudar: (campo) => (e) => {
            dispatch({ tipo: "mudar", campo: campo, valor: e.target.value })
        },
        mudarDireto: (campo, valor) => {
            dispatch({ tipo: "mudar", campo: campo, valor: valor })
        }
    }
}