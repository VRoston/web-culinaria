import React from 'react';

export const Homepage: React.FC = () => {
	return (
		<div className="App">
			<header className="App-header">
				<h1>WebCulinária</h1>
				<p>Receitas simples, práticas e deliciosas para o seu dia a dia!</p>
				<img src="/logo192.png" alt="Logo WebCulinária" style={{ width: 120, margin: '20px 0' }} />
				<a
					className="App-link"
					href="#receitas"
				>
					Ver receitas
				</a>
			</header>
		</div>
	);
};
