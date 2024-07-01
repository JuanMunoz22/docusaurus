---
sidebar_position: 1
---

# Cerrar procesos CRON Intiza

1. La ejecución automatica de la integración a Intiza, actualmente deja procesos tomados que no paran de ejecutarse. Por lo cual, debemos cerrarlos manualmente de la siguiente forma.

    Primeramente dememos hacer log-in en putty y ejecutar el siguiente comando:

    ~~~
        ps -e l | grep intiza
    ~~~

    Este comando nos mostrara todos los procesos del cron que se encuentran ejecutando.

    Pare cerrar estos procesos solo debemos ejecutar el siguiente comando.

    ~~~
        //PID se obtiene desde el comando anterior
        kill -15 <PID>
    ~~~