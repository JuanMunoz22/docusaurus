---
sidebar_position: 1
---

# Contabilización de abonos

### __25.7.3 – *Explorar Cartola__

    1. Para comenzar, tenemos el explorador de cartolas al cual se le agrego un nuevo campo llamado **“Contab Abono”** el cual indica si los datos fueron o no procesados a través del módulo de contabilización de abonos.

        ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1717534821/1-2573_wuamsv.png "2573")

### __25.7.8 - *Contabilización de Abonos__

    1. Para realización el proceso de contabilización de abonos automático se debe ingresar al módulo __25.7.8 - *Contabilización de Abonos__ e ingresar la fecha de movimientos contables, por defecto esta fecha será de dos días anteriores a la fecha actual. 

        Luego se debe seleccionar la fecha de las cartolas a seleccionar, seguido de las cuentas que se desean procesar.
        **Si el campo cuenta se encuentra en blanco por defecto tomara todas las cuentas**.
    
        Al ingresar todos los datos solicitados el módulo procesara toda la información según los filtros usados y desplegara un reporte al cual podremos acceder indicando en el campo **Output “PANTALLA”**. 

        ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1717535871/2-2578_c6ofs8.png "2578")

    2. El reporte generado nos mostrara por pantalla un resumen de la cantidad de registros detectados y la cantidad de registros que se encuentran disponibles para procesar automáticamente, ordenando estos según las cuentas detectadas. 
    Además, el reporte muestra el detalle de todos los registros detectados indicando si este se procesara o no, en caso de que el registro no quede disponible para procesar se indicara un mensaje indicando el motivo por el cual no se procesara.
    
        ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1717536135/3-reporte_oudhrg.png "reporte")

    3. Por último, luego de la visualización del reporte, el módulo desplegara un explorador temporal con el detalle de los registros detectados.
    
        ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1717536226/4-exploradorTemporal_vyqeas.png "expTemporal")

    4. Para finalizar, solo nos queda indicar al módulo si los registros detectados se procesaran.
    Esto generara una carga CIM automática a la opción **27.6.4** para cada registro detectado disponible para procesar.

        ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1717536336/5-confirmar_ogjjay.png "confirmar")

### __25.7.9 – *Mnto Codigos Flujo Caja__

    1. Para asignar un cliente a un código de flujo de caja, solo debemos ingresar al módulo __25.7.9 – *Mnto Codigos Flujo Caja__ ingresando el código de cliente.

        Posterior a eso debemos seleccionar uno de los códigos disponibles para asignar al cliente y presionar en **“Siguiente”**.
        Una vez realizados los pasos mencionados el cliente ya tendrá su código asociado.

        ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1717536506/6-2579_knmlvn.png "2579")

### __25.7.19 – *Exp Clientes Flujo Caja__

    1. En el siguiente explorador podremos comprobar todos los clientes asociados a un código de flujo de caja.
    Si un cliente no se visualiza en este explorador se debe realizar el paso anterior __25.7.9 – *Mnto Codigos Flujo Caja__ para asignarle un código.

        Es importante mencionar que si un cliente no tiene un código asociado el módulo __25.7.8 - *Contabilización de Abonos__ no procesara ningún pago automático para dicho cliente.

        ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1717536656/7-25719_gggpi2.png "25719")

### __25.7.20 – *EXP Rut Pagadores__

    1. Por último, tenemos el explorador de RUT pagadores, el cual se va rellenando automáticamente según la información ingresada en Salesforce.
    Esta información es tomada por el módulo de contabilizaciones automática para definir a que cliente se asignara el pago según el RUT detectado.

        ![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1717536980/8-rutPagadores_nwye78.png "rutPagadores")
    

        
    
        
    

    



    
    

