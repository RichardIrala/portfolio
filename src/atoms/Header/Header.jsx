const Header = () => {  
	return (
		<header className="header__header">
			<div className="header__principalContainer">
				<a href="/" className="header__homeIconContainer">
					<img className="header__homeIcon" src="assets/header/home-icon.svg" alt="home icon" />
					<span className="header__generalText">Ir al inicio</span>
				</a>
				<a className="header__downloadIconContainer" href="Richard-Irala-CV.pdf" download>
					<span className="header__generalText">Descargar Curriculum</span>
					<img className="header__downloadIcon" src="assets/header/download-icon.svg" alt="Download icon" />
				</a>
			</div>
		</header>
	)
}

export default Header;