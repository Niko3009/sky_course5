export const Logo = () => {
    const logoName = 'logo_dark'
    const logoSrc = `/img/${logoName}.png`

    return (
        <div>
            <img className="logo" src={logoSrc} />
        </div>
    )
}
