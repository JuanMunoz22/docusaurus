---
sidebar_position: 1
---
# Crear usuario SSH

1. Crear usuario linux

    Para crear el usuario linux solicitado primero debemos ingresar a putty y ejecutar el siguiente comando.

    ~~~
        //En <usuario> debe ir el id del usuario a crear
        useradd -g qad -d /home/<usuario> <usuario>
    ~~~

2. Asignar contraseña al usuario
    
    Al usuario que acabamos de crear debemos asignarle su contraseña con el siguiente comando.
    ~~~
        //En <usuario> debe ir el id del usuario a crear
        passwd <usuario>
    ~~~

3. Cambiar permisos a carpeta

    Para cambiar los permisos a la carpeta debemos ejecutar el siguiente comando.

    ~~~
        //En <usuario> debe ir el id del usuario
        chmod 777 /home/<usuario>
    ~~~

Luego de estos pasos el usuario ya esta listo para ser utilizado.


    