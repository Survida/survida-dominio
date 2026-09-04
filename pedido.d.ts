export type FormaCobro = 'regalo' | 'pagado' | 'a_cobrar';

export interface PedidoItem {
  id: string;
  producto_id: string;
  cantidad: number;
  precio_unitario: number;
  subtotal: number;
  // Descuento en PESOS sobre el subtotal de este item, no porcentaje. Si
  // el item se sirve desde varios lotes, el backend lo reparte
  // proporcionalmente (pedidos.service.ts:188).
  descuento?: number;
  es_fiado: boolean;
  productos?: { nombre: string };
}

export type EstadoPedido =
  | 'pendiente'
  | 'confirmado'
  | 'pagado'
  | 'preparando'
  | 'en_entrega'
  | 'entregado'
  | 'cancelado';

export interface Pedido {
  id: string;
  cliente_id: string;
  canal: string;
  estado: EstadoPedido;
  // Como se cobro. Va aparte del estado a proposito: el estado cuenta en
  // que punto esta la entrega y esto cuenta la plata. Si fueran el mismo
  // campo, un pedido entregado Y pagado no se podria representar.
  //   regalo   = se entrego sin cargo (vale $0 pero el stock salio igual)
  //   pagado   = ya se cobro
  //   a_cobrar = se entrego y queda por cobrar
  // Null en los pedidos anteriores a que existiera el dato.
  forma_cobro?: FormaCobro | null;
  total: number;
  fecha: string;
  // Indicaciones sueltas para la entrega: horario que prefiere, timbre
  // que no anda, "dejar con el encargado". Las carga el bot al armar el
  // pedido y las lee la app del repartidor.
  notas?: string | null;
  // Columnas reales de la tabla pedidos que no todo endpoint devuelve.
  // El comprobante de pago que subio el cliente.
  comprobante?: string | null;
  // Quien lo cargo y quien lo confirmo (usuarios de Supabase Auth). El
  // panel los usa para el historial de ventas por empleado.
  creado_por?: string | null;
  confirmado_por?: string | null;
  confirmado_en?: string | null;
  clientes?: { nombre: string };
  pedido_items?: PedidoItem[];
}
