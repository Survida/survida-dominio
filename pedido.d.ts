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
  clientes?: { nombre: string };
  pedido_items?: PedidoItem[];
}
