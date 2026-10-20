export interface Perrito {
  id?: number;
  nombre: string;
  color: string;
  edad: number;
  raza: string;
}


pool.query(
      'SELECT * FROM perritos ORDER BY id'
    );