import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController {
    async index (request: Request, response: Response) {
        const { city, uf, items } = request.query;

        const parsedItems = String(items)
            .split(',')
            .map(item => Number(item.trim()));

        const points = await knex('points')
            .join('point_items', 'points.id', '=', 'point_items.point_id')
            .whereIn('point_items.item_id', parsedItems)
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct()
            .select('points.*');
    
        //pegar caminho da imagem
        const serializedPoints = points.map(point => {
            return { 
                ...point,
                image_url: `http://192.168.0.102:3333/uploads/${point.image}`
            }
        });

        return response.json(serializedPoints);
    }

    async show (request: Request, response: Response) {
        const { id } = request.params;

        const point = await knex('points')
            .where('id', id)
            .first();

        if (!point) {
            return response.status(400).json({ message: "Point not found." });
        }

        const serializedPoint = {
            ...point,
            image_url: `http://192.168.0.102:3333/uploads/${point.image}`
        };

        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'point_items.item_id')
            .where('point_items.point_id', id)
            .select('items.title');

        return response.json({ point: serializedPoint, items });
    }

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
            image: request.file.filename,
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
        const pointItems = items
            .split(',')
            .map((item: string) => Number(item.trim()))
            .map((item_id: number) => {
                return {
                    item_id,
                    point_id
                };
        });
    
        //cadastra os itens do ponto na tabela point_items
        await trx('point_items').insert(pointItems);

        await trx.commit(); //faz os inserts na base de dados
    
        return response.json({ 
            id: point_id,
            ...point
         });
    }
}

export default PointsController;