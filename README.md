# Para rodar a api localmente:


## Para rodar a api, lembre-se, você precisa fazer parte da organização. O código é livre, mas o acesso a hospedagem não. Lembre-se de requisitar acesso para @wdvictor

 1. Certifique-se de tenha nodejs 14 instalado no pc
					
		$node -v
		v14.15.1
					
 2. Certifique-se que tenha o firebase-tools instalado

		$npm i -g firebase-tools

 3. Loge-se com seu usuário do firebase


		$firebase login

 4. Faça clone do repositório e inicíe 

		$firebase init


	 1. Lembre-se de usar javaScript (e não typeScript)
	 2. Utili-ze o projeto já criado Git-breakdown-mobile
	 3. Todas as outras opões default
 5. E por fim

			$firebase serve --only functions,hosting

