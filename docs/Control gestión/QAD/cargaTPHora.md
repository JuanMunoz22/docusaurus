---
sidebar_position: 1
---

# Carga TPHora

Antes de realizar la carga masiva debemos tener listo nuestro archivo excel a cargar. El archivo excel debe tener la siguiente estructura.

| |A       |B   |C |D             |E           |F     |G     |
|-|--------|----|--|--------------|------------|------|------|
|1|Articulo|Ruta|OP|Centro Trabajo|Fecha Inicio|Tiempo|TPHora|

Luego de eso debemos guardar nuestro archivo en formato .csv como se muestra en la imagen.

![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1719955697/archEcel_rw2uh4.png "archExcl")

Cuando tengamos listo nuestro archivo .csv debemos cargarlo a SSH. Para eso debemos conectarnos desde dicho programa al ambiente en el cual haremos la carga masiva.

Aquí debemos asegurarnos de tener el botón “ASCII” activo (1) y estar alojados en nuestro directorio (2).

![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1717534261/3-ssh_vq8wjg.png "ssh")

Finalmente, solo debemos arrastrar nuestro archivo Excel a SSH.

![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1717534340/4-ssh2_rfj1q1.png "ssh2")

Ya con nuestro archivo cargado, debemos dirigirnos al modulo **14.13.24 - *Carga Masiva TpHora** e ingresar el nombre del archivo que cargamos en SSH y presionar "Siguiente"

![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1719956208/tpHora_ew7gfz.png "tpHora")

Esta accion nos mostrara un reporte con todos los datos de nuestro archivo a cargar.

![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1719956624/reporte_t4jmpg.png "tpHoraReporte")

Por último, si todos los datos estan correctos solo debemos confirmar para procesar la carga masiva.

![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1719956842/procesar_bmieoo.png "tpHoraReporteConfirma")

Esta accion realizara la carga de los datos y ademas, nos generara el archivo "diferenciastphora.csv" en la **Salida Excel** con las diferencias que deberemos ajustar manualmente.

