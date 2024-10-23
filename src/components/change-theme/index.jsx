import useLocalStorage from './useLocalStorage'
import './style.css'


function ChangeTheme() {

    const [theme,changeTheme] = useLocalStorage('theme','dark')

    const handleToggleTheme = () => {
        changeTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div className='light-dark-mode' data-theme = {theme}>
            <div className='container1'>
                <p>Hello World</p>
                <button onClick={handleToggleTheme}>Change Theme</button>
            </div>
        </div>
    )
}

export default ChangeTheme