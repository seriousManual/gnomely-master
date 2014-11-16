install-api:
	git clone git@github.com:zaphod1984/gnomely-api.git
	make -C gnomely-api install-packages

install-web:
	git clone git@github.com:zaphod1984/gnomely-web.git
	make -C gnomely-web install
	make -C gnomely-web buildProd

cleanup:
	rm -rf gnomely-api
	rm -rf gnomely-web
	rm -rf deploymentConfig