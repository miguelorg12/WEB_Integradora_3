export interface Contacto {
    id: number;
    nombre: string;
    apellido: string;
    telefono: string;
    email: string;
    id_bebe: number;
    bebe_nombre?: string;
    bebe_apellido?: string;
    is_active?: number;
    created_at?: string;
    updated_at?: string;
}