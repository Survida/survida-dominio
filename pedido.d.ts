export interface PedidoItem {
  id: string;
  producto_id: string;
  cantidad: number;
  precio_unitario: number;
  subtotal: number;
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
