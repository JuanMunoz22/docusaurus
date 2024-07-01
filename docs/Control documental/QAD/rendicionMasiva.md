---
sidebar_position: 1
---

# Rendición Masiva 

1. Para comenzar, debemos revisar el explorador **7.13.26 – Explorar Facturas (Sin Artic.)2** y verificar que las facturas que rendiremos masivamente no se encuentren ya rendidas con anterioridad.

    ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1717533608/1-71326_tzw6t1.png "71326")

2. El Paso que debemos seguir es generar nuestro archivo Excel para la carga masiva. Para esto solo debemos crear un archivo Excel con una columna la cual tenga el **número de todas las facturas** que necesitamos rendir.

    Luego de eso debemos guardar nuestro archivo en formato **.csv** como se muestra en la imagen

    ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1717533967/2-archivoExcel_g2osqv.png "archivoExcel")

3. En este paso debemos ingresar al programa **“SSH”** y conectarnos al ambiente en el cual estamos trabajando (Piloto, Producción).

    Aquí debemos asegurarnos de tener el botón **“ASCII”** activo **(1)** y estar alojados en nuestro directorio **(2)**.

    ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1717534261/3-ssh_vq8wjg.png "ssh")

4. Finalmente, solo debemos arrastrar nuestro archivo Excel a SSH.

    ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1717534340/4-ssh2_rfj1q1.png "ssh2")

5. Para Finalizar, debemos ingresar al módulo __55.22.16 - *Rendición Masiva Facturas__ e ingresar el nombre del archivo que cargamos en SSH y presionar **“Siguiente”**.

    
    ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1717534422/5-552216_m5q2k1.png "552216")

6. Esta acción nos mostrara un reporte con todas las facturas que rendiremos, si alguna de ellas tiene errores el módulo mostrara el error en el campo **“Mensaje”**.

    Por último, si no tenemos errores solo debemos confirmar para procesar la carga masiva.

    ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1717534528/6-reporte_laqpgn.png "reporte")

7. Una vez realizada la carga, si volvemos al explorador **7.13.26 – Explorar Facturas (Sin Artic.)2** las facturas ya se encontrarán rendidas.

    ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1717534595/7-final_vnkcbj.png "final")
