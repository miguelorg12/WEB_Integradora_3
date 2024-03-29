export interface Contacto {
    id: number;
    nombre: string;
    apellido: string;
    telefono: string;
    email: string;
    id_bebe: number;
    nombre_bebe?: string;
    is_active?: number;
    created_at?: string;
    updated_at?: string;
}