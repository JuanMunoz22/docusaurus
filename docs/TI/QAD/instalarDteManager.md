---
sidebar_position: 3
---

# Instalar DTE Manager

Es importante mencionar que antes de realizar esta instalación no deben existir instalaciones previas de QAD en el equipo. Si ese es el caso se deben desintalar y eliminar todas las instalaciones anteriores.

1. El primer paso a realizar antes de instalar el plugin DTE Manager es instalar Java en el equipo. Desde esta web podemos descargar su version mas actual **https://www.java.com/es/download/ie_manual.jsp**, tambien lo podemos descargar desde **[aqui](https://drive.google.com/file/d/1JDi7yKUzFHSGpz09nHLkDIpTA1ynEM4L/view?usp=drive_link)**. 

    para realizar esta instalar solo debemos ejecutar como administrador su instalador y seguir sus pasos.

2. Agregar a los sitios de confianza de java las rutas de QAD.

    Para eso debemos buscar **Configurar Java en nuestro equipo**

    ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1717608179/configurarJava_t2hvik.png "configurarJava")

    Luego de eso nos dirigimos a la pestaña **seguridad** y presionamos en **Editar lista de sitios...**

    ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1717608377/sitiosConfianzaJava_yhfdgv.png "sitiosConfinza")

    En esta pestaña debemos agregar la siguientes rutas:
        - http://qad-pilo.bredenmaster.com:8080/qadhome/
        - http://qad-prod.bredenmaster.com:8080/qadhome/

    ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1717608909/listasitios_jndrud.png "listasitios")

3. Descargar el archivo ___InternetExplorer.vbs___ desde [aqui](https://drive.google.com/file/d/1mvYkN7a113aHcfxYx4XE0NWz9MJju9Yz/view?usp=drive_link).

    Actualmente windows ya no tiene soporte soporte para internet explorer, el cual es necesario para reinstalar QAD, por lo cual debemos ejecutar el script **InternetExplorer.vbs** para asi ejecutar la version antigua de internet explorar.

    Para ejecutar este script debemos buscar **CMD** en nuestro equipo y ejecutarlo como administrador. 

    ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1717694872/cmd_outqil.png "buscaCMD")

    Luego de eso buscamos la ruta en la cual tenemos nuestro archivo **InternetExplorer.vbs** 

    ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1717695020/rutaIEvbs_dntbmr.png "rutaIEvbs")

    Buscamos la ruta en nuestro **CMD**.

    ~~~
        //En <ruta> ingresamos la ruta en la cual esta nuestro archivo 
        cd <ruta>
    ~~~

    Luego de eso ingresamos en la consola el nombre del script, esto nos abrira Internet Explorer.

    ~~~
        InternetExplorer.vbs
    ~~~

    ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1717695633/IE_mqkfqi.png "IE")

4. Configurar vista compatibilidad de Internet Explorer.

    Para configurar esto debemos ir a la pestaña que muestra la imagen en Internet Explorer.

    ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1717771395/configurarVistaCompatibilidad_efgdqf.png "configurarVistaCompatibilidad")

    Luego de ese debemos agregar las rutas del ambiente de QAD que instalaremos.
        - http://qad-pilo.bredenmaster.com:8080/qadhome/
        - http://qad-prod.bredenmaster.com:8080/qadhome/

    ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1717771542/configurarVistaCompatibilidad2_sx6pwr.png "configurarVistaCompatibilidad2")

5. Agregar a sitios de confianza de Internet Explorer.

    Para agregar a nuestros sitios de confianza debemos ingresar a **opciones de internet** como se muestra en la imagen.

    ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1718055445/1-IEopcionesInternet_pfp5c4.png "IEOpcionesInternet")

    Luego vamos a la pestaña **"Seguridad"** y dejamos el nivel de seguridad en medio.

    ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1718055561/2-Seguridad_pyiija.png "nivelSeguridad")

    Ahora debemos ir a la pestaña **"Privacidad"**. Aqui debemos tener inactivo el checkbox para bloquear las ventanas emergentes. Posterior a eso presionamos en el boton **Sitios**.

    ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1718055740/2-Privacidad_h733sr.png "privacidad")

    Ya por ultimo, debemos ingresar la ruta de confianza y presionar en **permitir**.
        - http://qad-pilo.bredenmaster.com:8080/qadhome/
        - http://qad-prod.bredenmaster.com:8080/qadhome/

    ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1718055999/3-sitiosConfianza_nk5tex.png "sConfianza")


6. Desactivar Antivirus

    Para continuar con la instalación del plugin se debe desactivar el antivirus. Para esto se debe primeramente se debe ingresar el codigo para desactivarlo.

    ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1719845329/sophos_owwlfo.png "sophos")

    Luego de eso debemos desactivar todas las opciones.

    [IMAGEN AQUI]

7. Instalar QAD
8. Copiar Plugins

    Luego de la instalación de QAD debemos ir a la ruta en la cual instalamos QAD y copiar la carpeta de plugin que se puede descargar desde **[aqui](https://drive.google.com/drive/folders/17svGWDPnskGQBBwVXORy6cHN1z3BrzXw?usp=drive_link)**. 

    ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1719846665/plugins_yjwmav.png "plugins")

    Una vez copiados los plugins ejecutamos QAD como administrador.
    
    ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1719846925/ejecutarAdministrador_cuccok.png "pluginsAdministrador")

9. Validar correcta instalación

    Para validar la correcta instalación de QAD debemos ir al modulo **28.3.10.1**, presionamos click derecho sobre cualquier registro y seleccionamos la opción "Modificar Cuentas y/o Recibos de compra".

        ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1719847094/dteManager_wg7p6d.png "dteManager")
        
        Con esto solo debemos validar que se abra la ventana emergente, si la accion se realiza correctamente el plugin estara bien instalado.

        ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1719847277/dteemergente_hojvad.png "dteEmergente")







