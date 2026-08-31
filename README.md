# @survida/dominio

Los tipos del dominio de SURVIDA (Cliente, Pedido, Entrega, ...), en un
solo lugar, compartidos por las 5 apps.

## Por que existe

Cada app tenia su propia copia de los mismos tipos, y ya habian
divergido. `EstadoEntrega` estaba escrito identico en `survida-panel` y
en `survida-repartidor`, en archivos que nada relacionaba: el dia que se
agregara un estado nuevo en el backend, las dos apps iban a compilar
perfecto y fallar en produccion.

Ademas `survida-panel/lib/types.ts` tenia 106 conexiones entrantes (38
tipos, 39 archivos importandolo): tocar una linea podia romper media app
sin aviso.

## Como se usa

Se instala desde GitHub, sin publicar nada en npm:

    npm install github:Survida/survida-dominio

Y se importa SIEMPRE del pedazo que hace falta:

    import type { Pedido } from '@survida/dominio/pedido';
    import type { Cliente } from '@survida/dominio/cliente';

Nunca del paquete entero (`from '@survida/dominio'`): eso reconstruye el
mismo cuello de botella que este paquete vino a desarmar. Por eso
`index.d.ts` no reexporta nada.

En `survida-repartidor` (Expo) usa siempre `import type`, con la palabra
`type`: le garantiza a Babel que puede borrar el import entero y Metro
nunca ve el archivo.

## Que hay adentro

Solo archivos `.d.ts`: declaraciones puras. No se compilan, no se
empaquetan, no llegan al navegador ni al celular. El paquete no tiene
paso de build ni dependencias.

| Archivo | Tipos |
|---|---|
| `cliente.d.ts` | TipoCliente, Cliente |
| `producto.d.ts` | Producto, Modalidad, ListaPrecio, Lote |
| `pedido.d.ts` | PedidoItem, EstadoPedido, Pedido |
| `entrega.d.ts` | EstadoEntrega, Entrega, Repartidor, RendimientoRepartidor, Vehiculo, UltimaPosicionVehiculo |
| `finanzas.d.ts` | MovimientoCtaCte, StockAdeudado, Gasto, Factura, AbonoItem, Abono, EstadoClienteAbono, ClienteAbono |
| `personal.d.ts` | Vendedor, ResumenVendedor, MovimientoVendedor, Empleado, RegistroAsistencia |
| `operaciones.d.ts` | Sensor, UltimaLecturaSensor, Notificacion |
| `reportes.d.ts` | ProductoPuntoEquilibrio, PuntoEquilibrio, MesResumen, ResumenMensual, ProductoMasVendido, MesProduccion, ProduccionMensual |

## Origen

Los 38 tipos salieron de `survida-panel/lib/types.ts`, que era la version
mas completa. Se verifico con el compilador que cada tipo del paquete y
su original son intercambiables en las dos direcciones: ningun campo
cambio.
