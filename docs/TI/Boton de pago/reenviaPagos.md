---
sidebar_position: 1
---

# Reenviar pagos a QAD

Cuando nos reportan un pago pendiente los usuarios deben enviar el voucher para comprobar la fecha y monto pagado por el cliente.

![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1719946789/1-pago_jbnd83.jpg "reportado")

Para reenviar pedidos a QAD debemos ir a la siguiente ruta: **http://192.168.90.104/service/informe.php**

En este servicio tenemos la opcion de filtrar los pagos por **cliente**. Este dato siempre es proporcionado por los usuarios que reportan el problema. Ademas, los usuarios al reportar este problema adjuntan una captura del voucher de pago, lo que nos permite obtener datos como la **fecha** y **monto pagado**. 

![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1719946884/2-pagoDetectado_cv7ma4.jpg "pagoDetectado")

Una vez detectado el pago pendiente de integracion, **No se debe enviar inmediatamente**,primeramente debemos **Verificar** que efectivamente el pago reportado no se encuentra en QAD.

Para eso primeramente debemos ir al modulo __27.5.10 - *Exp Boton de Pago Facturas__ y filtrar por **factura**.

![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1719946970/bpexp_ch4m0r.jpg "exp")

Si las facturas no se encuentran en este explorador significa que los pagos de las facturas no llegaron desde la integracion. Pero aun existe la posibilidad de que esos pagos se hayan aplicado manualmente. Para verificar esto debemos ir al explorador __27.30 - *Expl Cuenta por cobrar__ y filtrar por referencia. 

Una vez realizada la busqueda debemos fijarnos que el **monto abierto** de la factura sea mayor o igual al pago realizado.

![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1719947131/2730_f45jx3.png "2730")

Ya validada la informacion mencionada anteriormente podemos reenviar el pago pendiente presionando el boton **"Enviar"** en el servicio. Esta integracion puede tardar hasta 2 min. en ser enviada a QAD.

Para validar que la informacion se integro correctamente podemos verificar el modulo __27.5.10 - *Exp Boton de Pago Facturas__ filtrando por factura o en el explorador __27.30 - *Expl Cuenta por cobrar__ filtrando por **referencia** y comprobando que el **monto abierto** haya disminuido segun el monto pagado.

![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1719947234/10-bp_k4frig.jpg "bp10")

![Animacion](https://res.cloudinary.com/dl7wpmele/image/upload/v1719947315/2730922_jl30sf.png "27302")
