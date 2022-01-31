import TranslationsProvider from "./TranslationsContext"

const AppContext = (props) =>{
    return (
        <TranslationsProvider>
            {props.children}
        </TranslationsProvider>
    )
}
export default AppContext