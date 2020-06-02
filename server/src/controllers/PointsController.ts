import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController {
    async create (request: Request, response: Response) {
        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = request.body;
    
        //transaction: se a segunda inserção falhar, a primeira não é executada
        const trx = await knex.transaction();

        const point = {
            image: 'image-fake',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        };
    
        const insertedIds = await trx('points').insert(point);
    
        //pega o id do ponto cadastrado
        const point_id = insertedIds[0];
    
        //pega os itens do ponto cadastrado
        const pointItems = items.map((item_id: number) => {
            return {
                item_id,
                point_id
            };
        });
    
        //cadastra os itens do ponto na tabela point_items
        await trx('point_items').insert(pointItems);
    
        return response.json({ 
            id: point_id,
            ...point
         });
    }
}

export default PointsController;